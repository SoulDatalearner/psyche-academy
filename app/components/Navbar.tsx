'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5">

        {/* Logo */}
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

          <div>
            <h1 className="text-lg md:text-xl font-bold text-teal-700">
              PSYCHE ACADEMY
            </h1>

            <p className="text-xs text-slate-500">
              Complete Career Guidance
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-slate-700 font-medium">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/study-abroad">Study Abroad</Link>

          <Link href="/courses">Courses</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

          <Link
            href="/contact"
            className="bg-teal-700 text-white px-5 py-3 rounded-xl hover:bg-teal-800 transition"
          >
            Book a Free Trial
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <svg
            className="w-8 h-8 text-slate-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">

          <div className="flex flex-col p-6 space-y-5 text-lg font-medium text-slate-800">

            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>

            <Link href="/about" onClick={handleLinkClick}>
              About
            </Link>

            <Link href="/services" onClick={handleLinkClick}>
              Services
            </Link>

            <Link href="/study-abroad" onClick={handleLinkClick}>
              Study Abroad
            </Link>

            <Link href="/courses" onClick={handleLinkClick}>
              Courses
            </Link>

            <Link href="/blog" onClick={handleLinkClick}>
              Blog
            </Link>

            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="bg-teal-700 text-white text-center py-4 rounded-xl font-semibold hover:bg-teal-800 transition"
            >
              Book a Free Trial
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}