"""Local-only review portal; never copied by the public gallery builder."""
import html,json,pathlib,hashlib
root=pathlib.Path(__file__).resolve().parents[2]
entries=json.loads((root/'site/catalog.json').read_text(encoding='utf-8'))
pending=[e for e in entries if e['status']=='pending']
out=root/'.codex/review';out.mkdir(parents=True,exist_ok=True)
def versioned_preview(entry):
    digest=hashlib.sha256((root/entry['source']).read_bytes()).hexdigest()[:12]
    separator='&' if '?' in entry['previewPath'] else '?'
    return html.escape(entry['previewPath']+separator+'revision='+digest,quote=True)

cards=''.join(f'<li><h2>{html.escape(e["titleZh"])}</h2><p>{html.escape(e["summaryZh"])}</p><a href="../../{versioned_preview(e)}">Open pending presentation</a> — <a href="../../docs/maintenance/reviews/pending-{e["id"]}.md">Review record</a></li>' for e in pending)
(out/'index.html').write_text(f'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pending review — internal</title><body><h1>Pending review</h1><p>Internal preview. Technical checks do not grant publication approval.</p><ul>{cards}</ul></body></html>',encoding='utf-8')
print(out/'index.html')
