export default function BlogPage() {
  const topics = ["IELTS tips", "Vocabulary", "Grammar", "Interview skills", "Study abroad", "Mental wellness", "Career growth"];
  return <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">Resources & insights</p><h1 className="mt-4 text-5xl font-black tracking-tight text-[#173826]">The Psyche Academy blog.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">An SEO-ready home for practical guidance, learner resources, and academy news.</p><div className="mt-9 flex flex-wrap gap-3">{topics.map((topic) => <span key={topic} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1e4d38] shadow-sm">{topic}</span>)}</div></section>;
}
