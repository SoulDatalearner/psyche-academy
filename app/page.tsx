import React from 'react';

export default function Home() {
  // Replace these with your real contact details!
  const whatsappNumber = "1234567890"; // Include country code, no "+" or spaces (e.g., "447123456789")
  const emailAddress = "hello@psycheacademy.com";
  const phoneNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent("Hi! I'm curious to know more about Psyche Academy. I'd love to schedule a free demo!");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12 selection:bg-indigo-500 selection:text-white">
      {/* Header / Logo */}
      <header className="max-w-6xl w-full mx-auto">
        <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          PSYCHE ACADEMY
        </span>
      </header>

      {/* Main Content */}
      <section className="max-w-3xl w-full mx-auto my-auto py-12 text-center md:text-left space-y-8">
        <div className="space-y-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-950/50 border border-indigo-800/50 rounded-full inline-block">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Curious to know what <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Psyche Academy
            </span> can do for you?
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl">
            We are building the ultimate interactive platform to help you master psychological concepts and science effectively. Want a sneak peek?
          </p>
        </div>

        {/* Catchy CTA Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 shadow-xl space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-200">
            Let’s skip the waitlist—get a personal walkthrough.
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* WhatsApp Link */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {/* WhatsApp SVG Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.285 1.503 4.887 1.505 5.421.002 9.85-4.388 9.853-9.782.002-2.613-1.015-5.07-2.864-6.92C16.671 2.141 14.215 1.12 11.636 1.12c-5.429 0-9.858 4.387-9.86 9.782-.001 1.778.48 3.467 1.393 4.969L2.233 21.71l5.952-1.556zM18.121 15.1c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Chat on WhatsApp for a Free Demo
            </a>

            {/* Email Link */}
            <a 
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Email Us
            </a>

            {/* Direct Call Link */}
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto border-t border-slate-900 pt-6 text-sm text-slate-500 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Psyche Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}