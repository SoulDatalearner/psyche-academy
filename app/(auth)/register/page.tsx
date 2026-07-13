import Link from "next/link";

export default function RegisterPage() {
  return <div className="fixed inset-x-0 bottom-0 top-16 z-40 grid place-items-center bg-[#f2f6ee] p-5"><section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"><p className="text-sm font-black text-[#1e4d38]">Psyche Academy</p><h1 className="mt-3 text-3xl font-black text-slate-900">Create your account</h1><p className="mt-3 text-slate-600">Registration flow placeholder for the future student portal.</p><Link href="/login" className="mt-7 inline-flex rounded-full bg-[#1e4d38] px-5 py-3 text-sm font-extrabold text-white">Go to login</Link></section></div>;
}
