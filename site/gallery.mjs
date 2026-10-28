import { matches } from './filter.mjs';
const entries = JSON.parse(document.querySelector('#catalog-data').textContent);
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const count = document.querySelector('#result-count');
const cards = [...document.querySelectorAll('[data-entry]')];
const empty = document.querySelector('#empty');
function readLocation() {
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  category.value = params.get('category') || '';
  if (!category.value) category.value = '';
}
function render(updateURL = true) {
  const shown = new Set(entries.filter(e => matches(e, search.value, category.value)).map(e => e.id));
  cards.forEach(card => card.hidden = !shown.has(card.dataset.entry));
  count.textContent = `${shown.size} of ${entries.length} explainers`;
  empty.hidden = shown.size !== 0;
  if (updateURL) {
    const url = new URL(location.href);
    search.value.trim() ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
    category.value ? url.searchParams.set('category', category.value) : url.searchParams.delete('category');
    history.replaceState(null, '', url);
  }
}
search.addEventListener('input', () => render());
category.addEventListener('change', () => render());
document.querySelectorAll('[data-clear]').forEach(button => button.addEventListener('click', () => {
  search.value = ''; category.value = ''; render(); search.focus();
}));
addEventListener('popstate', () => { readLocation(); render(false); });
readLocation(); render(false);
// Browser history restores the document's scroll position and filter query.
if (window.gsap) {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.timeline({ defaults: { duration: .7, ease: 'power2.out' } })
      .from('.hero-copy > *', { y: 12, opacity: 0, stagger: .08 })
      .from('.hero-art', { y: 16, opacity: 0 }, '<.15');
  });
}
