'use client';

import React from 'react';

export default function WhatsAppChat() {
  const whatsappNumber = "917012224008"; 
  const preFilledMessage = encodeURIComponent(
    "Hello Psyche Team! I'm ready to unlock my potential and explore the fascinating world of human psychology. I would love to connect for a free demo walkthrough of Psyche Academy!"
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end group">
      <span className="mb-2 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium rounded-lg shadow-xl opacity-0 scale-95 origin-bottom-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
        Begin your journey here! 🧠✨
      </span>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${preFilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute inset-0 w-full h-full rounded-full bg-emerald-500/40 animate-ping pointer-events-none opacity-75"></span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-slate-950 rounded-full"></span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.285 1.503 4.887 1.505 5.421.002 9.85-4.388 9.853-9.782.002-2.613-1.015-5.07-2.864-6.92C16.671 2.141 14.215 1.12 11.636 1.12c-5.429 0-9.858 4.387-9.86 9.782-.001 1.778.48 3.467 1.393 4.969L2.233 21.71l5.952-1.556zM18.121 15.1c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
}