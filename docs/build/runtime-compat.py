"""Small, explicit compatibility patches; never modify the installed skill."""
def isolate_presenter_gestures(html):
    if 'function deckGestureAllowed(e)' in html:
        return html
    anchor = 'let wheelTO=null,wheelAcc=0;'
    if anchor not in html:
        raise ValueError('Unknown runtime: wheel anchor missing')
    guard = '''function deckGestureAllowed(e){
  return !overviewOn && !document.body.matches('.ppt-presenter,.ppt-audience,.ppt-preview')
    && !e.target?.closest?.('input,textarea,select,button,a,[contenteditable="true"]');
}
'''
    patches = {
        anchor: guard + anchor,
        "addEventListener('wheel',e=>{\n  wheelAcc": "addEventListener('wheel',e=>{\n  if(!deckGestureAllowed(e)){wheelAcc=0;return;}\n  wheelAcc",
        "addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY}": "addEventListener('touchstart',e=>{if(!deckGestureAllowed(e)){tx=null;return;}tx=e.touches[0].clientX;ty=e.touches[0].clientY}",
        "addEventListener('touchend',e=>{\n  const dx": "addEventListener('touchend',e=>{\n  if(tx===null||!deckGestureAllowed(e))return;\n  const dx",
    }
    for before, after in patches.items():
        if html.count(before) != 1:
            raise ValueError('Unknown runtime anchor: '+before[:70])
        html = html.replace(before, after, 1)
    return html
