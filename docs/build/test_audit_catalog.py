import importlib.util,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('audit_catalog',Path(__file__).with_name('audit-catalog.py'))
module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
class DocumentTitleTests(unittest.TestCase):
    def test_svg_accessibility_titles_do_not_count_as_document_titles(self):
        document=module.Document()
        document.feed('<html><head><title>Deck</title></head><body><svg><title>Gene diagram</title><svg><title>Detail</title></svg></svg></body></html>')
        self.assertEqual((document.titles,document.title_ends),(1,1))
    def test_duplicate_document_titles_still_detected(self):
        document=module.Document()
        document.feed('<title>First</title><title>Second</title>')
        self.assertEqual((document.titles,document.title_ends),(2,2))
if __name__=='__main__': unittest.main()
