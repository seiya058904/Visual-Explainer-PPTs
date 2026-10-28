import importlib.util
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec=importlib.util.spec_from_file_location('gallery',Path(__file__).with_name('build-gallery.py'))
gallery=importlib.util.module_from_spec(spec);spec.loader.exec_module(gallery)

class GalleryBuildTests(unittest.TestCase):
    def test_catalog_paths_and_status_boundary(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            for name in ('ppt-collection/example.html','site/covers/example.webp'):
                p=root/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_text('fixture')
            entry={'id':'example','status':'approved','artifact':'ppt-collection/example.html','cover':'site/covers/example.webp'}
            with patch.object(gallery,'ROOT',root):
                self.assertEqual(gallery.validate([entry,{'id':'draft','status':'pending'}]),[entry])
                for path in ('../site/covers/example.webp','site/../covers/example.webp','C:/escape.webp','/tmp/escape.webp'):
                    with self.assertRaises(ValueError):gallery.validate([{**entry,'cover':path}])
                with self.assertRaises(ValueError):gallery.validate([entry,entry])
                with self.assertRaises(ValueError):gallery.validate([])

if __name__=='__main__':unittest.main()
