'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable function to collapse mobile drawer smoothly on click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Branding */}
<Link
  href="/"
  className="flex items-center gap-3"
>
  <Image
    src="/logo.png"
    alt="Psyche Academy"
    width={50}
    height={50}
    priority
  />

  <div className="leading-tight">
    <h1 className="text-xl font-bold tracking-wide text-teal-700">
      PSYCHE ACADEMY
    </h1>

    <p className="text-xs text-slate-500">
      Complete Career Guidance
    </p>
  </div>
</Link>

        {/* Desktop Navigation Link Cluster */}
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-600">

  <Link href="/">Home</Link>

  <Link href="/about">About</Link>

  <Link href="/services">Services</Link>

  <Link href="/study-abroad">Study Abroad</Link>

  <Link href="/courses">Courses</Link>

  <Link href="/blog">Blog</Link>

  <Link href="/contact">Contact</Link>

  <Link
    href="/free-practice"
    className="bg-teal-700 text-white px-4 py-2 rounded-xl text-sm hover:bg-teal-800 transition"
  >
    Free Practice
  </Link>

</div>

        {/* Hamburger Mobile Toggle Button Control */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-teal-700 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel Wrapper */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-6 gap-4 font-semibold text-slate-700">
            <Link href="/" onClick={handleLinkClick} className="pb-2 border-b border-slate-50 hover:text-teal-700">Home</Link>
            <Link href="/courses" onClick={handleLinkClick} className="pb-2 border-b border-slate-50 hover:text-teal-700">Courses</Link>
            <Link href="/contact" onClick={handleLinkClick} className="pb-2 border-b border-slate-50 hover:text-teal-700">Contact</Link>
            <Link href="/free-practice" onClick={handleLinkClick} className="text-center bg-teal-700 text-white py-3 rounded-xl transition hover:bg-teal-800">
              Free Practice
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}