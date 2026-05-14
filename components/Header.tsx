import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['News', '/news'],
  ['Reports', '/reports'],
  ['Case Tracker', '/case-tracker'],
  ['Explainers', '/explainers'],
  ['About', '/about'],
];

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">AI Copyright Watch</Link>
        <nav className="flex flex-wrap gap-4 text-sm text-gray-700">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
