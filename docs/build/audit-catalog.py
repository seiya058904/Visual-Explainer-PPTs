"""Check the complete status/source/artifact ledger without executing deck scripts."""
import argparse
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.slides = 0
        self.ids = set()
        self.duplicates = []
        self.titles = 0
        self.title_ends = 0
        self.svg_depth = 0

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'svg':
            self.svg_depth += 1
        if tag == 'title' and not self.svg_depth:
            self.titles += 1
        if tag == 'section' and 'slide' in (attrs.get('class') or '').split():
            self.slides += 1
        if attrs.get('id'):
            if attrs['id'] in self.ids:
                self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])

    def handle_endtag(self, tag):
        if tag == 'title' and not self.svg_depth:
            self.title_ends += 1
        if tag == 'svg':
            self.svg_depth = max(0, self.svg_depth - 1)


def audit():
    entries = json.loads((ROOT / 'site/catalog.json').read_text(encoding='utf-8'))
    rows = []
    for entry in entries:
        row = {'id': entry['id'], 'status': entry['status'], 'files': [], 'errors': []}
        if entry['mappingStatus'] != 'verified':
            row['errors'].append('Source mapping is not verified')
        if entry['status'] == 'pending' and entry['artifact'] is not None:
            row['errors'].append('Pending entry has a public artifact')
        for role in ('source', 'artifact'):
            value = entry.get(role)
            if not value:
                if role == 'source':
                    row['errors'].append('Missing source')
                continue
            path = (ROOT / value).resolve()
            if not path.is_relative_to(ROOT) or not path.is_file():
                row['errors'].append('Missing or unsafe ' + role)
                continue
            raw = path.read_bytes()
            parsed = Document()
            parsed.feed(raw.decode('utf-8'))
            issues = []
            if parsed.slides != entry['slideCount']:
                issues.append(f'Slide count {parsed.slides} differs from catalog {entry["slideCount"]}')
            if parsed.titles != 1 or parsed.title_ends != 1:
                issues.append('Exactly one closed document title required')
            if parsed.duplicates:
                issues.append('Duplicate literal IDs: ' + ', '.join(parsed.duplicates))
            row['errors'].extend(role + ': ' + issue for issue in issues)
            row['files'].append({'role': role, 'path': value, 'bytes': len(raw),
                                 'sha256': hashlib.sha256(raw).hexdigest(), 'slides': parsed.slides})
        rows.append(row)
    return rows


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--out', type=Path)
    args = parser.parse_args()
    rows = audit()
    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding='utf-8')
    for row in rows:
        if row['errors']:
            print(row['id'] + ': ' + '; '.join(row['errors']))
    print(f'{len(rows)} entries; {sum(bool(row["errors"]) for row in rows)} failed')
    raise SystemExit(int(any(row['errors'] for row in rows)))
