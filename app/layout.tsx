import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css"; // Ensure your global tailwind styling is imported here

export const metadata: Metadata = {
  title: "Psyche Academy - IELTS Prep Arena",
  description: "Seamless interactive practice environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        
        <div className="flex min-h-screen">
          
          {/* GLOBAL FIXED SIDEBAR */}
          <aside className="fixed inset-y-0 left-0 w-64 bg-slate-950 text-slate-200 flex flex-col border-r border-slate-800 z-50">
            
            {/* PSYCHE ACADEMY BRAND HEADER */}
            <div className="border-b border-slate-800 p-4">
              <Link
                href="/"
                className="block overflow-hidden rounded-xl bg-white p-1.5 transition-opacity hover:opacity-90"
                aria-label="Psyche Academy home"
              >
                <Image
                  src="/images/psyche-academy-logo.png"
                  alt="Psyche Academy — Empowering minds. Shaping futures."
                  width={1254}
                  height={1254}
                  className="h-auto w-full"
                  priority
                />
              </Link>
            </div>

            {/* NAV LINKS NAVIGATION */}
            <nav className="flex-1 p-4 space-y-1.5 mt-4">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-slate-400 hover:bg-slate-900 hover:text-white"
              >
                <span>📊</span>
                <span>Dashboard</span>
              </Link>

              <Link 
                href="/modules" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-slate-400 hover:bg-slate-900 hover:text-white"
              >
                <span>📚</span>
                <span>Reading Modules</span>
              </Link>

              <Link 
                href="/practice?test=R1" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-white bg-purple-700 shadow-md shadow-purple-900/20"
              >
                <span>✍️</span>
                <span>Active Test Arena</span>
              </Link>

              <Link 
                href="/vocabulary" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-slate-400 hover:bg-slate-900 hover:text-white"
              >
                <span>📖</span>
                <span>Vocabulary Pack</span>
              </Link>

              <hr className="border-slate-800 my-4" />

              <Link 
                href="/profile" 
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-slate-400 hover:bg-slate-900 hover:text-white"
              >
                <span>👤</span>
                <span>My Profile</span>
              </Link>
            </nav>

            {/* BOTTOM PROFILE SIGNPOST */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60">
              <div className="flex items-center space-x-3 p-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-xs">
                  PA
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Student Workspace</p>
                  <p className="text-[10px] text-purple-400">Premium Access</p>
                </div>
              </div>
            </div>

          </aside>

          {/* RIGHT SIDE DATA WRAPPER */}
          <main className="flex-1 pl-64 min-h-screen bg-gray-50">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}
