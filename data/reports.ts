export type ReportItem = { id:string; title:string; source:string; date:string; region:string; summary:string; link:string; tags:string[]; updated:string };
export const reportItems: ReportItem[] = [
  { id:'r1', title:'Copyright and AI: Consultation Outcome', source:'UK Government', date:'2024-12-01', region:'UK', summary:'Government position on copyright exceptions and AI innovation pathways.', link:'#', tags:['copyright','policy'], updated:'2026-05-08' },
  { id:'r2', title:'Large Language Models and Intellectual Property', source:'House of Lords', date:'2025-02-16', region:'UK', summary:'Parliamentary analysis of legal uncertainty and creator compensation mechanisms.', link:'#', tags:['parliament','IP'], updated:'2026-05-07' },
  { id:'r3', title:'EU AI Act Implementation Update', source:'European Commission', date:'2026-01-20', region:'EU', summary:'Implementation timeline and copyright-relevant obligations for GPAI systems.', link:'#', tags:['EU AI Act','compliance'], updated:'2026-05-11' },
  { id:'r4', title:'Copyright and Artificial Intelligence: Part 3', source:'US Copyright Office', date:'2026-03-01', region:'US', summary:'Guidance on authorship, registration, and use of copyrighted works in AI systems.', link:'#', tags:['registration','fair use'], updated:'2026-05-13' }
];
