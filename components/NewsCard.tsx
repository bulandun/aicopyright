import { NewsItem } from '@/data/news';
export function NewsCard({ item }: { item: NewsItem }) {
  return <article className="rounded-xl border border-gray-200 p-5"><p className="text-xs text-gray-500">{item.date} · {item.region} · Last updated {item.updated}</p><h3 className="mt-2 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm text-gray-700">{item.summary}</p><div className="mt-3 flex flex-wrap gap-2">{item.tags.map(t=><span key={t} className="rounded-full border border-gray-300 px-2 py-0.5 text-xs">{t}</span>)}</div><a href={item.sourceUrl} className="mt-4 inline-block text-sm underline">Source: {item.source}</a></article>;
}
