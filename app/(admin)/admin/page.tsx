import Link from "next/link";

export default function AdminPortalPage() {
  const cards = [["Admissions", "New enquiries and consultation pipeline"], ["Revenue", "Payments, subscriptions, and reporting"], ["Active students", "Learner activity and engagement"], ["Teacher performance", "Classes, attendance, and feedback"]];
  return <section><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">Admin portal</p><h1 className="mt-3 text-4xl font-black tracking-tight text-[#173826]">Run the academy from one place.</h1><p className="mt-3 text-lg text-slate-600">The operational foundation for admissions, people, courses, finance, and content.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{cards.map(([title, detail]) => <Link href="/admin/admissions" key={title} className="rounded-3xl bg-white p-6 shadow-sm"><p className="font-extrabold text-[#1e4d38]">{title}</p><p className="mt-2 text-sm text-slate-600">{detail}</p></Link>)}</div></section>;
}
