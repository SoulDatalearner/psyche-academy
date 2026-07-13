import Link from "next/link";

export default function TeacherPortalPage() {
  const cards = [["Today’s classes", "2 scheduled sessions"], ["Attendance", "Record today’s attendance"], ["To grade", "4 submissions awaiting review"], ["Homework", "Create or update an assignment"]];
  return <section><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">Teacher portal</p><h1 className="mt-3 text-4xl font-black tracking-tight text-[#173826]">Your teaching workspace.</h1><p className="mt-3 text-lg text-slate-600">Manage learning, feedback, and class operations from one clear view.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{cards.map(([title, detail]) => <Link href="/teacher/assignments" key={title} className="rounded-3xl bg-white p-6 shadow-sm"><p className="font-extrabold text-[#1e4d38]">{title}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></Link>)}</div></section>;
}
