import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">
          Psyche Academy
        </h1>
        <div className="space-x-6 flex items-center">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <Link href="/courses" className="hover:text-blue-700">Courses</Link>
            <Link href="/practice" className="hover:text-blue-700">Practice</Link>
            <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            <Link href="/login" className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors text-sm font-medium">
              Sign In
            </Link>
          </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          Master IELTS with Confidence
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Personalized IELTS coaching, free practice materials,
          expert feedback, and English courses designed to help
          you achieve your dream score.
        </p>

        <div className="space-x-4">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
            Start Free Practice
          </button>

          <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-50">
            Book a Free Demo
          </button>
        </div>
      </section>
    </main>
  );
}