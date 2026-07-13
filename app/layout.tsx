import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psyche Academy - Empowering Minds, Shaping Futures",
  description: "Learning programmes for English, confidence, careers, and personal growth.",
};

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["IELTS", "/ielts"],
  ["Spoken English", "/spoken-english"],
  ["Training", "/corporate-training"],
  ["Psychology", "/psychology"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

function GlobalNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dfe9dd] bg-[#faf9f5]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/welcome" className="flex shrink-0 items-center gap-2" aria-label="Psyche Academy home">
          <span className="relative h-10 w-11 overflow-hidden" aria-hidden="true">
            <Image src="/images/psyche-academy-logo.png" alt="" width={1254} height={1254} className="absolute left-1/2 top-[-8px] w-[70px] max-w-none -translate-x-1/2" priority />
          </span>
          <span className="hidden font-black tracking-tight text-[#1e4d38] sm:inline">Psyche <span className="text-[#d27542]">Academy</span></span>
        </Link>
        <div className="hidden items-center gap-4 xl:flex">
          {navigation.map(([label, href]) => <Link key={href} href={href} className="text-xs font-extrabold text-[#5b6f60] transition hover:text-[#1e4d38]">{label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#cfe0cf] px-3 py-2 text-xs font-extrabold text-[#1e4d38]">Menu</summary>
            <div className="absolute right-0 top-11 z-20 w-56 rounded-2xl border border-[#dfe9dd] bg-white p-2 shadow-xl">
              {navigation.map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-3 py-2.5 text-sm font-bold text-[#426050] hover:bg-[#edf7eb]">{label}</Link>)}
            </div>
          </details>
          <Link href="/welcome" className="rounded-full bg-[#1e4d38] px-3 py-2 text-xs font-extrabold text-white sm:px-4">Enquire</Link>
        </div>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <GlobalNavigation />
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  );
}
