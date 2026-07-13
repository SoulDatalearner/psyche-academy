import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const courses = {
  ielts: { title: "IELTS", duration: "6–10 weeks", audience: "Students planning study, migration, or professional registration abroad.", outcome: "Approach each test section with a clear strategy, stronger language control, and meaningful feedback.", modules: ["Reading", "Listening", "Writing", "Speaking", "Vocabulary & grammar"] },
  oet: { title: "OET", duration: "6–10 weeks", audience: "Healthcare professionals preparing for the Occupational English Test.", outcome: "Communicate accurately and confidently in the language situations used by healthcare professionals.", modules: ["Listening", "Reading", "Writing", "Speaking", "Healthcare language"] },
  pte: { title: "PTE", duration: "6–8 weeks", audience: "Learners preparing for the Pearson Test of English.", outcome: "Develop the timing, task familiarity, and language accuracy required for computer-based English testing.", modules: ["Speaking & writing", "Reading", "Listening", "Scored practice", "Test strategy"] },
  "spoken-english": { title: "Spoken English", duration: "4–8 weeks", audience: "Learners who want to speak naturally in personal, academic, and professional settings.", outcome: "Express ideas with greater fluency, confidence, vocabulary, and clarity.", modules: ["Conversation", "Pronunciation", "Vocabulary", "Confidence building", "Professional communication"] },
  "business-english": { title: "Business English", duration: "4–6 weeks", audience: "Professionals who want to communicate more effectively at work.", outcome: "Write, present, participate in meetings, and build workplace relationships with confidence.", modules: ["Email writing", "Meetings", "Presentations", "Negotiation", "Workplace vocabulary"] },
  "public-speaking": { title: "Public Speaking", duration: "4–6 weeks", audience: "Students and professionals ready to present ideas with presence and confidence.", outcome: "Structure messages, manage nerves, and deliver engaging presentations.", modules: ["Message design", "Voice & delivery", "Body language", "Storytelling", "Presentation practice"] },
  "data-science-basics": { title: "Data Science Basics", duration: "8 weeks", audience: "Beginners exploring foundational data literacy and career pathways.", outcome: "Understand core data concepts and begin building practical confidence with data.", modules: ["Data foundations", "Spreadsheets", "Data visualisation", "Python introduction", "Career pathways"] },
} as const;

type CourseSlug = keyof typeof courses;

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug as CourseSlug];
  return course ? { title: `${course.title} Course | Psyche Academy`, description: course.outcome } : {};
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses[slug as CourseSlug];
  if (!course) notFound();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">Psyche Academy courses</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight text-[#173826]">{course.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{course.outcome}</p>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_.75fr]">
        <div className="rounded-3xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-black text-[#1e4d38]">Course overview</h2><p className="mt-4 leading-7 text-slate-600">{course.audience}</p><h3 className="mt-8 font-extrabold text-[#1e4d38]">Learning modules</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{course.modules.map((module) => <li key={module} className="rounded-xl bg-[#edf7eb] px-4 py-3 text-sm font-bold text-[#315d42]">{module}</li>)}</ul></div>
        <aside className="rounded-3xl bg-[#1e4d38] p-7 text-white"><p className="text-sm font-bold text-[#c5ddca]">Typical duration</p><p className="mt-2 text-3xl font-black">{course.duration}</p><h2 className="mt-8 text-xl font-black">Interested in this course?</h2><p className="mt-3 text-sm leading-6 text-[#c5ddca]">Speak with our team and find the programme level that suits your goals.</p><Link href="/welcome" className="mt-6 inline-flex rounded-full bg-[#f2c985] px-5 py-3 text-sm font-extrabold text-[#1d4531]">Enquire now</Link></aside>
      </div>
      <div className="mt-10 rounded-3xl border border-[#e0ebe0] bg-[#f7faf6] p-7"><h2 className="text-2xl font-black text-[#173826]">Frequently asked questions</h2><p className="mt-3 text-slate-600">Course FAQs, schedules, pricing, and trainer information will be managed through the future CMS.</p></div>
    </section>
  );
}
