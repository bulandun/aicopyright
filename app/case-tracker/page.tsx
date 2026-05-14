'use client';
import { useMemo, useState } from 'react';
import { caseItems } from '@/data/cases';
import { CaseCard } from '@/components/CaseCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';

export default function CaseTrackerPage() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const [status, setStatus] = useState('All');
  const regions = ['All', ...new Set(caseItems.map(c=>c.country))];
  const statuses = ['All', ...new Set(caseItems.map(c=>c.status))];
  const filtered = useMemo(()=>caseItems.filter(c=>(region==='All'||c.country===region)&&(status==='All'||c.status===status)&&`${c.caseName} ${c.parties} ${c.explanation} ${c.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())),[query,region,status]);
  return <div><h1 className="text-3xl font-semibold">Case Tracker</h1><p className="mt-2 text-gray-700">Monitor major legal disputes affecting creative AI tools and rightsholders.</p><div className="mt-5 grid gap-3 md:grid-cols-4"><SearchBar value={query} onChange={setQuery} /><FilterBar label="Country" value={region} options={regions} onChange={setRegion} /><FilterBar label="Status" value={status} options={statuses} onChange={setStatus} /></div><div className="mt-6 grid gap-4 md:grid-cols-2">{filtered.map(c=><CaseCard key={c.id} item={c} />)}</div></div>;
}
