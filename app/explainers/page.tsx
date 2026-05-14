const explainers = [
  'Can AI-generated work be copyrighted?',
  'Can copyrighted work be used to train AI?',
  'What does “fair use” mean?',
  'What is licensing for AI training?',
  'What should creators watch out for?',
];
export default function ExplainersPage(){return <div><h1 className="text-3xl font-semibold">Explainers</h1><p className="mt-2 text-gray-700">Plain-English summaries to help creatives understand complex AI copyright issues.</p><div className="mt-6 space-y-4">{explainers.map(t=><article key={t} className="rounded-xl border border-gray-200 p-5"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-sm text-gray-700">This guide outlines the current legal landscape, practical implications for creative teams, and signals to monitor as policy evolves.</p></article>)}</div></div>}
