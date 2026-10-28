export const normalize = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase().trim();
export function matches(entry, query = '', category = '') {
  if (entry.status !== 'approved') return false;
  if (category && !entry.categories.includes(category)) return false;
  const haystack = normalize([entry.titleZh, entry.titleEn, entry.summaryZh, ...entry.categories, ...entry.keywords].join(' '));
  return normalize(query).split(/\s+/).filter(Boolean).every(word => haystack.includes(word));
}
