import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-cyan-100">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* LEFT */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            🎓 Empowering Students Since Day One
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Learn.
            <br />
            Grow.
            <br />
            <span className="text-teal-700">
              Succeed.
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Psyche Academy helps students and professionals develop
            communication, confidence and career skills through
            IELTS, OET, PTE, Spoken English,
            Business English, Public Speaking and
            career-focused learning.
          </p>

          {/* Course Tags */}

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "IELTS",
              "OET",
              "PTE",
              "Spoken English",
              "Business English",
              "Public Speaking",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow"
              >
                {course}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/free-practice"
              className="rounded-xl bg-teal-700 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-teal-800"
            >
              Start Free Practice
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-teal-700 bg-white px-8 py-4 text-lg font-semibold text-teal-700 transition hover:bg-teal-700 hover:text-white"
            >
              Book Free Consultation
            </Link>

          </div>

          {/* Trust */}

          <div className="mt-10 flex items-center gap-4">

            <div className="text-2xl text-yellow-500">
              ★★★★★
            </div>

            <p className="text-gray-600">
              Helping learners achieve academic,
              professional and personal success.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <Image
            src="/hero-students.jpg"
            alt="Students"
            width={550}
            height={650}
            className="rounded-3xl shadow-2xl"
            priority
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">

            <p className="text-3xl font-bold text-teal-700">
              500+
            </p>

            <p className="text-gray-600">
              Students Guided
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}