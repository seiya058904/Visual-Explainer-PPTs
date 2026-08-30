import re, html, os, json, glob

COLL = "ppt-collection"

def extract(fname):
    src = open(os.path.join(COLL, fname), encoding="utf-8").read()
    src = re.sub(r'<script[\s\S]*?</script>', '', src)
    src = re.sub(r'<style[\s\S]*?</style>', '', src)
    slides = re.split(r'<section[^>]*', src)[1:]
    out = []
    for i, s in enumerate(slides, 1):
        s = re.split(r'</section>', s)[0]
        page = {"page": i, "kicker": [], "title": [], "lead": [], "stats": [], "body": [], "quote": []}
        # capture blocks by class
        for m in re.finditer(r'<(\w+)[^>]*class="([^"]*)"[^>]*>([\s\S]*?)</\1>', s):
            tag, cls, inner = m.group(1), m.group(2), m.group(3)
            txt = html.unescape(re.sub(r'<[^>]+>', ' ', inner))
            txt = re.sub(r'\s+', ' ', txt).strip()
            if not txt: continue
            if 'kicker' in cls: page["kicker"].append(txt)
            elif re.search(r'\bh-hero\b|\bh-xl\b|\bh-lg\b|\btitle\b', cls): page["title"].append(txt)
            elif 'lead' in cls: page["lead"].append(txt)
            elif re.search(r'\bstat-nb\b|\bbig-num\b|\bmid-num\b', cls): page["stats"].append(txt)
            elif re.search(r'\bquote\b|\bblockquote\b', cls): page["quote"].append(txt)
            elif tag in ('p','div','span','li','h2','h3','h4'): page["body"].append(txt)
        # dedupe nested: drop body entries contained in other entries
        alltxt = [t for k in ("kicker","title","lead","stats","quote") for t in page[k]]
        page["body"] = [b for b in page["body"] if b not in alltxt and len(b) > 1][:25]
        out.append(page)
    return out

result = {}
for f in sorted(glob.glob(os.path.join(COLL, "*.html"))):
    name = os.path.basename(f)
    try:
        result[name] = extract(name)
    except Exception as e:
        result[name] = [{"error": str(e)}]

os.makedirs("docs/copy-analysis", exist_ok=True)
with open("docs/copy-analysis/copy_dump.json", "w", encoding="utf-8") as fp:
    json.dump(result, fp, ensure_ascii=False, indent=1)
print("files:", len(result))
