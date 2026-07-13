import Link from "next/link";

type PortalType = "student" | "teacher" | "admin";

const portalLinks: Record<PortalType, [string, string][]> = {
  student: [["Dashboard", "/student"], ["My learning", "/student/ielts"], ["Progress", "/student/progress"], ["Assignments", "/student/assignments"], ["Mock tests", "/student/mock-tests"], ["Certificates", "/student/certificates"], ["Payments", "/student/payments"], ["Profile", "/student/profile"]],
  teacher: [["Dashboard", "/teacher"], ["Students", "/teacher/students"], ["Attendance", "/teacher/attendance"], ["Assignments", "/teacher/assignments"], ["Grading", "/teacher/grading"]],
  admin: [["Dashboard", "/admin"], ["Admissions", "/admin/admissions"], ["Students", "/admin/students"], ["Teachers", "/admin/teachers"], ["Courses", "/admin/courses"], ["Certificates", "/admin/certificates"], ["Finance", "/admin/finance"], ["CMS", "/admin/cms"], ["Settings", "/admin/settings"]],
};

export function PortalShell({ portal, children }: { portal: PortalType; children: React.ReactNode }) {
  const title = `${portal.charAt(0).toUpperCase()}${portal.slice(1)} Portal`;
  return (
    <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex overflow-hidden bg-[#f6f8f6] text-slate-900">
      <aside className="hidden w-64 shrink-0 flex-col bg-[#163d2c] p-5 text-white md:flex">
        <Link href="/welcome" className="text-xl font-black tracking-tight">Psyche <span className="text-[#f2c985]">Academy</span></Link>
        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#a7d0a7]">{title}</p>
        <nav className="mt-10 space-y-1">
          {portalLinks[portal].map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-3 py-2.5 text-sm font-bold text-[#d4e6d4] hover:bg-white/10 hover:text-white">{label}</Link>)}
        </nav>
        <Link href="/welcome" className="mt-auto text-sm font-bold text-[#f2c985]">← Public website</Link>
      </aside>
      <div className="min-w-0 flex-1 overflow-y-auto">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-8"><Link href="/welcome" className="font-black text-[#1e4d38] md:hidden">Psyche Academy</Link><p className="ml-auto text-sm font-bold text-slate-600">{title}</p></header>
        <main className="mx-auto max-w-6xl p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}

const sectionDetails: Record<PortalType, Record<string, [string, string]>> = {
  student: {
    ielts: ["IELTS learning hub", "Lessons, practice, vocabulary, feedback, and mock tests will live here."],
    progress: ["Your progress", "Reading, listening, writing, speaking, attendance, and band progress will be visualised here."],
    assignments: ["Assignments", "View homework, submit work, and receive teacher feedback from one place."],
    "mock-tests": ["Mock tests", "Timed practice, scores, and detailed review will be available here."],
    certificates: ["Certificates", "Download, verify, and share your completed course certificates."],
    payments: ["Payments", "Course purchases, subscriptions, invoices, and receipts will appear here."],
    profile: ["Your profile", "Manage your personal details, learning preferences, and account settings."],
  },
  teacher: {
    students: ["Students", "Review learner profiles, progress, and support needs."],
    attendance: ["Attendance", "Record class attendance and follow up with learners."],
    assignments: ["Assignments", "Create homework, publish resources, and set due dates."],
    grading: ["Grading", "Review submissions, add feedback, and release scores."],
  },
  admin: {
    admissions: ["Admissions", "Manage enquiries, consultations, and enrolment pipelines."],
    students: ["Students", "Manage enrolments, accounts, learning records, and support."],
    teachers: ["Teachers", "Manage trainer profiles, workloads, and performance."],
    courses: ["Courses", "Build programmes, schedules, lesson content, and pricing."],
    certificates: ["Certificates", "Issue and verify learner certificates."],
    finance: ["Finance", "Monitor revenue, payments, refunds, and financial reports."],
    cms: ["Content management", "Manage website pages, blog posts, resources, and campaigns."],
    settings: ["Settings", "Configure academy information, permissions, automations, and integrations."],
  },
};

export function PortalSection({ portal, section }: { portal: PortalType; section: string }) {
  const [title, description] = sectionDetails[portal][section] ?? ["Coming soon", "This area is being prepared for your academy platform."];
  return <section><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d27542]">{portal} workspace</p><h1 className="mt-3 text-4xl font-black tracking-tight text-[#173826]">{title}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-8 rounded-3xl border border-dashed border-[#b8d7ba] bg-white p-8 text-sm font-semibold text-slate-500">Platform module shell ready for data, permissions, and workflows.</div></section>;
}
