"""Standalone exporter regressions. Run: python -m unittest discover -s docs/build -p 'test_*.py'."""
import importlib.util
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest import mock


SCRIPT = Path(__file__).with_name('export-standalone.py')
spec = importlib.util.spec_from_file_location('export_standalone', SCRIPT)
exporter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(exporter)


class ExportStandaloneTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.stage = self.root / 'stage with spaces'
        self.out = self.root / 'published'
        self.repo_patch = mock.patch.object(exporter, 'REPO', self.root)
        self.repo_patch.start()
        self.addCleanup(self.repo_patch.stop)

    def source(self, name, html='<h1>deck</h1>'):
        source = self.root / name
        source.parent.mkdir(parents=True, exist_ok=True)
        source.write_text(html, encoding='utf-8')
        return source

    def cli(self, *args):
        return subprocess.run([sys.executable, str(SCRIPT), *map(str, args)],
                              cwd=self.root, capture_output=True, text=True,
                              encoding='utf-8', env={**os.environ, 'PYTHONUTF8': '1'})

    def test_project_indexes_have_distinct_recognizable_names(self):
        first = self.source('2026-10-01-first/index.html', '<h1>first</h1>')
        second = self.source('2026-10-02-second/index.html', '<h1>second</h1>')
        result = self.cli(first, second, '--stage', self.stage)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(sorted(p.name for p in self.stage.iterdir()),
                         ['2026-10-01-first.html', '2026-10-02-second.html'])
        self.assertEqual((self.stage / '2026-10-01-first.html').read_text(), '<h1>first</h1>')
        self.assertEqual((self.stage / '2026-10-02-second.html').read_text(), '<h1>second</h1>')

    def test_default_stage_keeps_both_projects(self):
        first = self.source('first/index.html', '<h1>first</h1>')
        second = self.source('second/index.html', '<h1>second</h1>')
        result = exporter.main([str(first), str(second)])
        self.assertEqual(result, 0)
        stage = self.root / '.codex' / 'audit-2026-09-10' / 'standalone-candidate'
        self.assertEqual(sorted(p.name for p in stage.iterdir()), ['first.html', 'second.html'])

    def test_non_index_filename_is_preserved(self):
        source = self.source('project/custom-deck.html')
        result = self.cli('--stage', self.stage, source)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.stage / 'custom-deck.html').is_file())

    def test_out_dir_is_consumed_and_used(self):
        source = self.source('project/index.html')
        result = self.cli(source, '--out-dir', self.out)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.out / 'project.html').is_file())

    def test_combined_options_and_interleaved_multiple_inputs(self):
        first = self.source('first/index.html')
        second = self.source('second/index.html')
        result = self.cli('--stage', self.stage, first, '--out-dir', self.out, second)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(sorted(p.name for p in self.out.iterdir()), ['first.html', 'second.html'])
        self.assertEqual(list(self.stage.iterdir()), [])

    def test_equals_option_values(self):
        source = self.source('project/index.html')
        result = self.cli(source, f'--stage={self.stage}', f'--out-dir={self.out}')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.out / 'project.html').is_file())

    def test_missing_option_values_are_usage_errors_without_writes(self):
        source = self.source('project/index.html')
        for option in ['--stage', '--out-dir']:
            with self.subTest(option=option):
                result = self.cli(source, option)
                self.assertEqual(result.returncode, 2, result.stderr)
                self.assertIn('expected one argument', result.stderr)
        self.assertFalse(self.stage.exists())
        self.assertFalse(self.out.exists())

    def test_missing_inputs_and_unknown_option_are_usage_errors(self):
        for args in [[], ['--unknown']]:
            with self.subTest(args=args):
                result = self.cli(*args)
                self.assertEqual(result.returncode, 2, result.stderr)

    def test_check_only_has_no_filesystem_side_effects(self):
        source = self.source('project/index.html')
        for options in [[], ['--stage', self.stage], ['--out-dir', self.out],
                        ['--stage', self.stage, '--out-dir', self.out]]:
            with self.subTest(options=options):
                result = self.cli(source, '--check-only', *options)
                self.assertEqual(result.returncode, 0, result.stderr)
        self.assertFalse(self.stage.exists())
        self.assertFalse(self.out.exists())

    def test_batch_collisions_fail_before_any_output(self):
        first = self.source('first/same.html', '<h1>first</h1>')
        second = self.source('second/same.html', '<h1>second</h1>')
        for extra in [[], ['--check-only']]:
            with self.subTest(extra=extra):
                result = self.cli(first, second, '--stage', self.stage, *extra)
                self.assertNotEqual(result.returncode, 0)
                self.assertIn('conflict', result.stderr.lower())
        self.assertFalse(self.stage.exists())

    def test_case_only_and_index_legacy_name_collisions_fail(self):
        first = self.source('first/Deck.html')
        second = self.source('second/deck.html')
        index = self.source('project/index.html')
        legacy = self.source('elsewhere/project.html')
        for pair in [(first, second), (index, legacy), (index, index)]:
            with self.subTest(pair=pair):
                result = self.cli(*pair, '--stage', self.stage)
                self.assertNotEqual(result.returncode, 0)
                self.assertIn('conflict', result.stderr.lower())
        self.assertFalse(self.stage.exists())

    def test_invalid_later_input_leaves_existing_output_unchanged(self):
        source = self.source('first/index.html', '<h1>new</h1>')
        self.stage.mkdir()
        existing = self.stage / 'first.html'
        existing.write_bytes(b'old\r\n')
        result = self.cli(source, self.root / 'missing.html', '--stage', self.stage)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(existing.read_bytes(), b'old\r\n')
        self.assertEqual(list(self.stage.iterdir()), [existing])

    def test_missing_and_leftover_dependencies_abort_entire_batch(self):
        first = self.source('first/index.html')
        for html in ['<img src="images/missing.svg">', '<script src="other.js"></script>']:
            with self.subTest(html=html):
                bad = self.source('bad/index.html', html)
                result = self.cli(first, bad, '--stage', self.stage)
                self.assertEqual(result.returncode, 1, result.stderr)
                self.assertFalse(self.stage.exists())

    def test_destination_directory_conflict_aborts_before_writes(self):
        first = self.source('first/index.html')
        second = self.source('second/index.html')
        (self.stage / 'second.html').mkdir(parents=True)
        result = self.cli(first, second, '--stage', self.stage)
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertFalse((self.stage / 'first.html').exists())

    def test_destination_cannot_replace_an_input_source(self):
        source = self.source('project/deck.html', '<h1>original</h1>')
        result = self.cli(source, '--out-dir', source.parent)
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertEqual(source.read_text(), '<h1>original</h1>')

    def test_write_failure_rolls_back_existing_files_and_new_outputs(self):
        sources = [self.source(f'{name}/index.html') for name in ['first', 'second', 'third']]
        self.stage.mkdir()
        existing = self.stage / 'first.html'
        existing.write_bytes(b'old\r\n')
        real_replace = os.replace

        def fail_third(source, destination):
            if Path(destination) == self.stage / 'third.html':
                raise OSError('simulated commit failure')
            return real_replace(source, destination)

        with mock.patch.object(exporter.os, 'replace', side_effect=fail_third):
            result = exporter.main([*map(str, sources), '--stage', str(self.stage)])
        self.assertEqual(result, 1)
        self.assertEqual(existing.read_bytes(), b'old\r\n')
        self.assertEqual(list(self.stage.iterdir()), [existing])

    def test_asset_inlining_and_repeated_output_are_deterministic(self):
        source = self.source('project/index.html',
                             '<img src="images/shape.svg"><style>a{background:url(images/shape.svg)}</style>'
                             '<script>import(\'./assets/motion.min.js\')</script>'
                             '<script>lucide.createIcons();</script>')
        self.source('project/images/shape.svg', '<svg xmlns="http://www.w3.org/2000/svg"></svg>')
        self.source('project/assets/motion.min.js', 'export const ready = true;')
        for _ in range(2):
            result = self.cli(source, '--stage', self.stage)
            self.assertEqual(result.returncode, 0, result.stderr)
            output = (self.stage / 'project.html').read_bytes()
            if _ == 0:
                first = output
            else:
                self.assertEqual(output, first)
        self.assertIn(b'data:image/svg+xml', output)
        self.assertIn(b'data:text/javascript;base64,', output)
        self.assertIn(b'if(window.lucide)', output)
        self.assertNotIn(b'images/shape.svg', output)


if __name__ == '__main__':
    unittest.main()
