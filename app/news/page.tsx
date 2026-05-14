'use client';
import { useMemo, useState } from 'react';
import { newsItems } from '@/data/news';
import { NewsCard } from '@/components/NewsCard';
import { FilterBar } from '@/components/FilterBar';
import { SearchBar } from '@/components/SearchBar';

export default function NewsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [region, setRegion] = useState('All');
  const categories = ['All', ...new Set(newsItems.map(n=>n.category))];
  const regions = ['All', ...new Set(newsItems.map(n=>n.region))];
  const filtered = useMemo(()=>newsItems.filter(n => (category==='All' || n.category===category) && (region==='All'||n.region===region) && `${n.title} ${n.summary} ${n.source} ${n.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query, category, region]);
  return <div><h1 className="text-3xl font-semibold">News</h1><p className="mt-2 text-gray-700">Recent coverage across lawsuits, policy, training data, and creative sectors.</p><div className="mt-5 grid gap-3 md:grid-cols-3"><SearchBar value={query} onChange={setQuery} /><FilterBar label="Category" value={category} options={categories} onChange={setCategory} /><FilterBar label="Region" value={region} options={regions} onChange={setRegion} /></div><div className="mt-6 grid gap-4 md:grid-cols-2">{filtered.map(item=><NewsCard key={item.id} item={item} />)}</div></div>;
}
