export default function Stats() {
  const stats = [
    {
      value: "500+",
      label: "Students Guided",
    },
    {
      value: "95%",
      label: "Student Satisfaction",
    },
    {
      value: "7+",
      label: "Courses",
    },
    {
      value: "100+",
      label: "Practice Tests",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-4xl font-bold text-teal-700">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}