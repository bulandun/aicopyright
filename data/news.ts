export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  region: string;
  summary: string;
  source: string;
  sourceUrl: string;
  tags: string[];
  updated: string;
};

export const newsItems: NewsItem[] = [
  { id:'n1', title:'Publishers file new AI training data complaint', date:'2026-04-18', category:'Lawsuits', region:'US', summary:'A coalition of publishers alleges unauthorized use of archives for model training.', source:'Court filing summary', sourceUrl:'#', tags:['training data','publishing'], updated:'2026-05-10' },
  { id:'n2', title:'EU clarifies transparency expectations for generative models', date:'2026-03-22', category:'Policy', region:'EU', summary:'Regulators expanded documentation guidance for model providers and downstream users.', source:'EU policy brief', sourceUrl:'#', tags:['transparency','compliance'], updated:'2026-05-12' },
  { id:'n3', title:'Music labels announce licensing framework pilot', date:'2026-05-03', category:'Music', region:'UK', summary:'Labels and AI developers launched a voluntary framework for dataset licensing.', source:'Industry release', sourceUrl:'#', tags:['licensing','music'], updated:'2026-05-13' },
  { id:'n4', title:'Creative agencies push for provenance standards', date:'2026-04-29', category:'Creative Industries', region:'Global', summary:'Agency consortium proposed metadata rules for synthetic assets and campaign outputs.', source:'Trade association memo', sourceUrl:'#', tags:['provenance','advertising'], updated:'2026-05-09' }
];
