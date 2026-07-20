import Link from "next/link";

export default function StudyAbroadPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Study Abroad
          </h1>

          <p className="text-xl max-w-3xl leading-8 text-slate-100">
            Achieve your dream of studying overseas with complete guidance
            from Psyche Academy—from selecting the right country and
            university to securing your visa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              Book Free Counselling
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-700 transition"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Why Study Abroad?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-50 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Better Career Opportunities
            </h3>

            <p className="text-slate-600">
              International degrees improve your career prospects and increase
              your chances of securing high-paying global jobs.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Global Exposure
            </h3>

            <p className="text-slate-600">
              Experience different cultures, world-class education and build
              an international professional network.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Permanent Residency Pathways
            </h3>

            <p className="text-slate-600">
              Many countries offer opportunities for post-study work permits
              and permanent residency.
            </p>
          </div>

        </div>

      </section>

      {/* Countries */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Popular Destinations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "🇬🇧 United Kingdom",
              "🇨🇦 Canada",
              "🇦🇺 Australia",
              "🇺🇸 USA",
              "🇮🇪 Ireland",
              "🇳🇿 New Zealand",
              "🇩🇪 Germany",
              "🇪🇺 Europe"
            ].map((country) => (
              <div
                key={country}
                className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg">
                  {country}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Study Abroad Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Career Counselling",
            "Course Selection",
            "University Selection",
            "Application Assistance",
            "Scholarship Guidance",
            "SOP & LOR Support",
            "IELTS / PTE / OET Coaching",
            "Visa Documentation",
            "Education Loan Guidance",
            "Pre-Departure Orientation"
          ].map((service) => (
            <div
              key={service}
              className="bg-slate-50 rounded-xl p-6 shadow"
            >
              <h3 className="font-bold text-xl">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Study Abroad?
          </h2>

          <p className="text-xl mb-10 text-teal-100">
            Schedule a FREE counselling session with our expert advisors and
            discover the best study destination for your future.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
          >
            Book Your Free Counselling
          </Link>

        </div>

      </section>

    </main>
  );
}