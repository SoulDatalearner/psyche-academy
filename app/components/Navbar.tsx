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
  href="/contact"
  className="bg-teal-700 text-white px-4 py-2 rounded-xl text-sm transition hover:bg-teal-800"
>
  Book a Free Trial
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

{/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-b border-slate-200">
    <div className="flex flex-col p-6 gap-4">

      <Link href="/" onClick={handleLinkClick} className="hover:text-teal-700">
        Home
      </Link>

      <Link href="/about" onClick={handleLinkClick} className="hover:text-teal-700">
        About
      </Link>

      <Link href="/career-guidance" onClick={handleLinkClick} className="hover:text-teal-700">
        Career Guidance
      </Link>

      <Link href="/programs" onClick={handleLinkClick} className="hover:text-teal-700">
        Programs
      </Link>

      <Link href="/study" onClick={handleLinkClick} className="hover:text-teal-700">
        Study in India & Abroad
      </Link>

      <Link href="/corporate-training" onClick={handleLinkClick} className="hover:text-teal-700">
        Corporate Training
      </Link>

      <Link href="/resources" onClick={handleLinkClick} className="hover:text-teal-700">
        Resources
      </Link>

      <Link href="/contact" onClick={handleLinkClick} className="hover:text-teal-700">
        Contact
      </Link>

      <Link
        href="/contact"
        onClick={handleLinkClick}
        className="mt-4 bg-teal-700 text-white text-center py-3 rounded-xl font-semibold hover:bg-teal-800 transition"
      >
        Book a Free Trial
      </Link>

    </div>
  </div>
)}    </nav>
  );
}