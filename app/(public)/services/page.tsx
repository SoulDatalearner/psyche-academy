export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-teal-700 mb-6">
        Our Services
      </h1>

      <p className="text-lg text-slate-600 mb-12">
        Psyche Academy provides complete career guidance, language training,
        psychology services and professional development programs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            Career Guidance
          </h2>
          <p>
            Personalized career planning for students and professionals.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            Study Abroad
          </h2>
          <p>
            Complete admission, visa and scholarship support.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            Study in India
          </h2>
          <p>
            College admissions, counselling and entrance guidance.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            IELTS • OET • PTE
          </h2>
          <p>
            Exam preparation with live classes and practice tests.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            Psychology Services
          </h2>
          <p>
            Psychometric assessments and educational psychology support.
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">
            Corporate Training
          </h2>
          <p>
            Communication, AI, analytics and professional skill development.
          </p>
        </div>

      </div>
    </main>
  );
}