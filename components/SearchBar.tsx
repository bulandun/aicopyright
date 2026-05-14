type Props = { value: string; onChange: (v:string)=>void };
export function SearchBar({ value, onChange }: Props) {
  return <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder="Search by title, tags, source..." className="w-full rounded-md border border-gray-300 px-3 py-2" />;
}
