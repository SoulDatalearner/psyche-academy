import Link from "next/link";

const categories = [
  "Study Abroad",
  "Study in India",
  "IELTS",
  "OET",
  "PTE",
  "Career Guidance",
  "Psychology",
  "Data Analytics",
  "AI & Vibe Coding",
];

const featuredPosts = [
  {
    title: "How to Score Band 8+ in IELTS",
    description:
      "Practical strategies to improve your Reading, Writing, Listening and Speaking scores.",
  },
  {
    title: "Study in the UK: Complete Guide",
    description:
      "Everything you need to know about admissions, scholarships and student visas.",
  },
  {
    title: "Top Career Options After Graduation",
    description:
      "Explore career paths, higher education and skill development opportunities.",
  },
  {
    title: "Power BI Roadmap for Beginners",
    description:
      "Learn how to start your journey in Data Analytics using Power BI.",
  },
  {
    title: "AI Tools Every Student Should Know",
    description:
      "Discover practical AI tools to improve productivity and learning.",
  },
  {
    title: "Educational Psychology: Learning Smarter",
    description:
      "Understand how psychology can improve memory, motivation and academic performance.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-bold">
            Career & Education Resource Centre
          </h1>

          <p className="mt-6 text-xl max-w-3xl text-slate-200 leading-8">
            Expert articles, career guidance, study abroad insights,
            English language preparation, psychology and technology—
            all in one place.
          </p>

          <div className="mt-10">
            <input
              type="text"
              placeholder="Search articles (Coming Soon)"
              className="w-full md:w-2/3 px-5 py-4 rounded-xl text-slate-900"
              disabled
            />
          </div>

        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Browse Categories
        </h2>

        <div className="flex flex-wrap gap-4">

          {categories.map((category) => (
            <span
              key={category}
              className="bg-white px-5 py-3 rounded-full shadow-sm border text-slate-700 hover:bg-teal-700 hover:text-white transition cursor-pointer"
            >
              {category}
            </span>
          ))}

        </div>

      </section>

      {/* Featured Articles */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Featured Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-8 border border-slate-100"
            >

              <div className="h-40 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 mb-6"></div>

              <h3 className="text-2xl font-bold">
                {post.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {post.description}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-6 text-teal-700 font-semibold hover:text-teal-900"
              >
                Read More →
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* Newsletter */}

      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-6 text-xl text-teal-100">
            Get career tips, study abroad updates, IELTS strategies and
            educational insights delivered to your inbox.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Your Email Address"
              className="px-5 py-4 rounded-xl text-slate-900 w-full md:w-96"
            />

            <button className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}