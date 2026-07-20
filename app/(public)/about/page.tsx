export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold">
            About Psyche Academy
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Empowering Minds. Shaping Futures.
          </p>

          <p className="mt-4 text-lg text-slate-400 max-w-4xl mx-auto">
            Helping students and professionals achieve academic success,
            career growth, and global opportunities through education,
            psychology and future-ready skills.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              Psyche Academy was established with a simple vision:
              every student deserves quality career guidance, practical
              education, and the confidence to succeed.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We combine educational psychology, communication,
              technology and career planning to prepare learners for
              higher education, employment and lifelong success.
            </p>

          </div>

          <div className="bg-teal-50 rounded-3xl p-12">

            <h3 className="text-2xl font-bold mb-6">
              What We Believe
            </h3>

            <ul className="space-y-4 text-slate-700">

              <li>✔ Every student has unique potential.</li>

              <li>✔ Career decisions should be evidence-based.</li>

              <li>✔ Education should lead to employment.</li>

              <li>✔ Skills matter as much as qualifications.</li>

              <li>✔ Learning never stops.</li>

            </ul>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow p-10">
            <h3 className="text-3xl font-bold text-teal-700 mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-8">
              To bridge the gap between education and employment by
              providing quality career guidance, skill development,
              global education support and lifelong learning.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-10">
            <h3 className="text-3xl font-bold text-teal-700 mb-4">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-8">
              To become one of India's most trusted organisations for
              career development, education and global opportunities.
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Career Guidance",
              "Study in India",
              "Study Abroad",
              "IELTS Coaching",
              "PTE Coaching",
              "OET Coaching",
              "Spoken English",
              "Psychometric Assessment",
              "Data Analytics",
              "AI & Vibe Coding",
              "Corporate Training",
              "Mental Health Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Founder */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Meet Our Founder
          </h2>

          <h3 className="text-3xl text-teal-400 font-bold">
            Dr. Sanjay CK
          </h3>

          <p className="mt-2 text-slate-300">
            Educational Psychologist • Career Mentor • Trainer
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Dr. Sanjay CK is committed to helping students and professionals
            make informed academic and career decisions through evidence-based
            guidance, communication training and future-ready skill development.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Your Future Starts Here
          </h2>

          <p className="mt-6 text-xl">
            Book a FREE Career Counselling session and explore
            the opportunities waiting for you.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}