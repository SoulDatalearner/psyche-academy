import React from "react";

export default function Home() {
  const whatsappNumber = "917012224008";
  const whatsappMessage = encodeURIComponent(
    "Hi Dr. Sanjay! I would like to know more about Psyche Academy."
  );

  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="inline-block bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full border border-teal-500/30 font-semibold text-sm mb-6">
                Empowering Minds. Shaping Futures.
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

                Complete

                <br />

                Career Guidance

                <br />

                <span className="text-teal-400">
                  For Students & Professionals
                </span>

              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-300">

                Psyche Academy helps students and professionals build successful
                careers through expert guidance, skill development and global
                opportunities.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  className="bg-teal-500 hover:bg-teal-400 transition px-8 py-4 rounded-xl font-bold"
                >
                  Book Free Counselling
                </a>

                <a
                  href="/courses"
                  className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition"
                >
                  Explore Courses
                </a>

              </div>

            </div>

            <div className="flex justify-center">

              <img
                src="/logo.png"
                alt="Psyche Academy"
                className="w-96"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "IELTS Coaching",
              "PTE Coaching",
              "OET Coaching",
              "Spoken English",
              "Study Abroad",
              "Study in India",
              "Career Guidance",
              "Psychometric Assessment",
              "Mental Health Support",
              "Corporate Training",
              "AI & Vibe Coding",
              "Data Analytics",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition"
              >

                <h3 className="text-xl font-bold mb-3">{item}</h3>

                <p className="text-slate-600">
                  Professional guidance and personalised support.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Psyche Academy?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Expert Guidance
              </h3>
              <p>Learn from experienced trainers and mentors.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Career Support
              </h3>
              <p>From education to employment.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                International Opportunities
              </h3>
              <p>Study Abroad assistance with expert counselling.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="font-bold text-xl mb-3">
                Future Skills
              </h3>
              <p>AI, Coding, Data Analytics and Digital Skills.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">

            Ready to Build Your Future?

          </h2>

          <p className="text-xl mb-10">

            Book your FREE career counselling session today.

          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 text-slate-400 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="font-semibold text-white mb-2">
            Psyche Academy
          </p>

          <p>
            © {new Date().getFullYear()} Psyche Academy. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}