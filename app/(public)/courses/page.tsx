import Link from "next/link";

const courses = [
  {
    title: "IELTS",
    description:
      "Comprehensive preparation for IELTS Academic and General Training with expert guidance, mock tests and personalised feedback.",
  },
  {
    title: "OET",
    description:
      "Specialised coaching for healthcare professionals preparing for the Occupational English Test.",
  },
  {
    title: "PTE Academic",
    description:
      "AI-assisted preparation with speaking practice, mock tests and proven exam strategies.",
  },
  {
    title: "Spoken English",
    description:
      "Build confidence in everyday, academic and professional communication through practical sessions.",
  },
  {
    title: "Data Analytics",
    description:
      "Learn Excel, SQL, Power BI and analytical thinking to prepare for today's data-driven careers.",
  },
  {
    title: "AI & Vibe Coding",
    description:
      "Explore AI tools, automation, prompt engineering and modern no-code workflows to boost productivity.",
  },
  {
    title: "Career Development",
    description:
      "Career planning, interview preparation, communication skills and professional development programs.",
  },
  {
    title: "Psychology & Personal Growth",
    description:
      "Educational psychology, emotional intelligence, confidence building and personal development.",
  },
];

export default function CoursesPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-bold">
            Our Courses
          </h1>

          <p className="mt-6 text-xl max-w-3xl text-slate-200 leading-8">
            Practical, career-focused learning designed to help students,
            graduates and professionals achieve their academic and career goals.
          </p>

        </div>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-8 border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {course.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                {course.description}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 text-teal-700 font-semibold hover:text-teal-900"
              >
                Enquire Now →
              </Link>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Not Sure Which Course Is Right for You?
          </h2>

          <p className="mt-6 text-xl text-teal-100">
            Speak with our team and receive personalised guidance based on your
            goals and career aspirations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
          >
            Book a Free Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}