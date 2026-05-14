type Props = { label:string; value:string; options:string[]; onChange:(v:string)=>void };
export function FilterBar({ label, value, options, onChange }: Props) {
  return (
    <label className="text-sm">
      <span className="mb-1 block text-gray-700">{label}</span>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="rounded-md border border-gray-300 px-3 py-2">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
