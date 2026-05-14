import { NewsletterSignup } from '@/components/NewsletterSignup';
import { NewsCard } from '@/components/NewsCard';
import { ReportCard } from '@/components/ReportCard';
import { CaseCard } from '@/components/CaseCard';
import { newsItems } from '@/data/news';
import { reportItems } from '@/data/reports';
import { caseItems } from '@/data/cases';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-gray-200 p-8">
        <p className="text-sm uppercase tracking-wide text-gray-600">Industry Intelligence</p>
        <h1 className="mt-2 text-4xl font-semibold">Stay informed on AI, copyright, and creative work</h1>
        <p className="mt-4 max-w-3xl text-gray-700">AI Copyright Watch is a research-focused monitoring hub for creative professionals tracking legal, policy, and market changes affecting creative AI workflows.</p>
      </section>
      <section><h2 className="mb-4 text-2xl font-semibold">Latest News</h2><div className="grid gap-4 md:grid-cols-2">{newsItems.slice(0,4).map(i=><NewsCard key={i.id} item={i} />)}</div></section>
      <section><h2 className="mb-4 text-2xl font-semibold">Featured Reports</h2><div className="grid gap-4 md:grid-cols-2">{reportItems.slice(0,2).map(i=><ReportCard key={i.id} item={i} />)}</div></section>
      <section><h2 className="mb-4 text-2xl font-semibold">Key Legal Cases Tracker</h2><div className="grid gap-4 md:grid-cols-2">{caseItems.slice(0,2).map(i=><CaseCard key={i.id} item={i} />)}</div></section>
      <NewsletterSignup />
    </div>
  );
}
