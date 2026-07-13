import Link from "next/link";

const practiceAreas = [
  ["Reading", "Build comprehension, speed, and question strategy."],
  ["Listening", "Train your ear with focused listening activities."],
  ["Vocabulary", "Learn high-value words in context."],
  ["Grammar", "Strengthen the foundations of clear English."],
  ["Writing", "Use practical prompts and writing guidance."],
  ["Speaking tips", "Build confidence for everyday and exam speaking."],
  ["Daily challenge", "Keep your learning momentum with a short daily task."],
];

export const metadata = {
  title: "Free English Practice | Psyche Academy",
  description: "Free practice resources for reading, listening, vocabulary, grammar, writing, and speaking.",
};

export default function FreePracticePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">Free practice</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-[#173826]">Start learning before you enrol.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Practical English resources for every learner—available without an account.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map(([title, description]) => (
          <article key={title} className="rounded-3xl border border-[#e0ebe0] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#1e4d38]">{title}</h2>
            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
            <Link href="/practice" className="mt-6 inline-flex text-sm font-extrabold text-[#d27542]">Practice now →</Link>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-3xl bg-[#1e4d38] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between">
        <div><h2 className="text-2xl font-black">Ready for a personalised learning path?</h2><p className="mt-2 text-sm text-[#c5ddca]">Create a free account to access your learning dashboard when it launches.</p></div>
        <Link href="/register" className="mt-5 inline-flex rounded-full bg-[#f2c985] px-5 py-3 text-sm font-extrabold text-[#1d4531] sm:mt-0">Create free account</Link>
      </div>
    </section>
  );
}
