import React from 'react';

const courses = [
  {
    id: 1,
    title: "IELTS Masterclass",
    description: "Complete preparation for Academic and General Training. Covers all 4 modules with proven strategies.",
    duration: "6 Weeks",
    level: "All Levels",
  },
  {
    id: 2,
    title: "Spoken English & Fluency",
    description: "Build real-world confidence, eliminate hesitation, and perfect your conversational English skills.",
    duration: "4 Weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Grammar Mastery",
    description: "Master complex sentence structures, tenses, and punctuation. The ultimate foundation for error-free writing.",
    duration: "3 Weeks",
    level: "Beginner to Advanced",
  },
  {
    id: 4,
    title: "Vocabulary Builder",
    description: "Learn high-band academic vocabulary, idioms, and phrasal verbs to elevate your speaking and writing.",
    duration: "2 Weeks",
    level: "All Levels",
  },
  {
    id: 5,
    title: "Official Mock Tests",
    description: "Simulate the real test environment with timed mock tests and receive detailed band score breakdowns.",
    duration: "Self-Paced",
    level: "Advanced",
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
            Our Training Programs
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore expert-led courses designed to help you achieve your dream band score and master the English language.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between p-6 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-4">
                  {course.level}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t pt-4">
                  <span>⏱ Duration: <strong>{course.duration}</strong></span>
                </div>
                <button className="w-full bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl hover:bg-blue-800 transition-colors text-center block">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}