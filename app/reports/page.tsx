'use client';
import { useMemo, useState } from 'react';
import { reportItems } from '@/data/reports';
import { ReportCard } from '@/components/ReportCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';

export default function ReportsPage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const regions = ['All', ...new Set(reportItems.map(r=>r.region))];
  const filtered = useMemo(()=>reportItems.filter(r=>(region==='All'||r.region===region) && `${r.title} ${r.summary} ${r.source} ${r.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())),[query,region]);
  return <div><h1 className="text-3xl font-semibold">Reports</h1><p className="mt-2 text-gray-700">Curated government, regulator, and institutional publications on AI and copyright.</p><div className="mt-5 grid gap-3 md:grid-cols-3"><SearchBar value={query} onChange={setQuery} /><FilterBar label="Region" value={region} options={regions} onChange={setRegion} /></div><div className="mt-6 grid gap-4 md:grid-cols-2">{filtered.map(r=><ReportCard key={r.id} item={r} />)}</div></div>;
}
