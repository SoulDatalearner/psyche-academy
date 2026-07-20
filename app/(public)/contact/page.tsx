import React from 'react';

export default function ContactPage() {
  const whatsappNumber = "917012224008";
  const emailAddress = "drsanjay@psyche-academy.com";
  const phoneNumber = "+917012224008";
  const inspiringMsg = encodeURIComponent("Hello Psyche Team! I'm ready to unlock my potential and explore the fascinating world of human psychology. I would love to connect for a free walkthrough consultation!");

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact Dr. Sanjay</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Have questions about international standard qualification courses or language modules? Let's talk live.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto pt-6">
        <a href={`https://wa.me/${whatsappNumber}?text=${inspiringMsg}`} target="_blank" rel="noopener noreferrer" className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-500 transition-all text-center space-y-2 group">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Chat</p>
          <p className="text-lg font-bold text-emerald-600 group-hover:underline">+91 70122 24008</p>
        </a>

        <a href={`mailto:${emailAddress}`} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-teal-500 transition-all text-center space-y-2 group">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</p>
          <p className="text-md font-bold text-teal-700 group-hover:underline break-all">{emailAddress}</p>
        </a>

        <a href={`tel:${phoneNumber}`} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-cyan-500 transition-all text-center space-y-2 group">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Call</p>
          <p className="text-lg font-bold text-cyan-600 group-hover:underline">{phoneNumber}</p>
        </a>
      </div>
    </main>
  );
} 