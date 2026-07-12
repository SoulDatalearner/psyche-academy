"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
            Let's Talk Success
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have questions about our IELTS or Spoken English programs? We are here to help.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200">
          {/* Quick Contact Info */}
          <div className="md:col-span-2 flex flex-col justify-between bg-blue-700 rounded-2xl p-6 text-white">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 text-sm mb-8">
                Reach out directly and our student support team will get back to you within 2 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <span className="block text-xs text-blue-200">Email Us</span>
                    <a href="mailto:support@psycheacademy.com" className="font-medium hover:underline">support@psycheacademy.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <span className="block text-xs text-blue-200">WhatsApp Support</span>
                    <a href="#" className="font-medium hover:underline">+1 (555) 019-2834</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-600/50">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
                <span>💬</span> Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Inquiry Form */}
          <form className="md:col-span-3 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-bold text-gray-950 mb-2">Book a Free Demo Class</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">First Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-700" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Last Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-700" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-700" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Target Course</label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-blue-700 text-gray-700">
                <option>IELTS Masterclass</option>
                <option>Spoken English & Fluency</option>
                <option>Grammar Mastery</option>
                <option>Vocabulary Builder</option>
                <option>Official Mock Tests</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message / Requirements</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-700" placeholder="Tell us about your target band score..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gray-950 text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}