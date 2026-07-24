function Education() {
  const education = [
    {
      year: "2021 - 2025",
      title: "B.Tech in Computer Science & Engineering",
      institute: "Mody University of Science and Technology",
    },
    {
      year: "2020",
      title: "Senior Secondary (Class XII)",
      institute: "V V Niketan High School • CBSE",
    },
    {
      year: "2018",
      title: "Secondary School (Class X)",
      institute: "St. Paul's High School • CBSE",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[450px] h-[450px] bg-violet-700/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="
          absolute 
          left-5 
          top-6 
          bottom-24
          w-[2px] 
          bg-violet-500/30">
          </div>

          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-10 mb-12"
            >
              {/* Circle */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-violet-600 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                •
              </div>

              {/* Card */}
              <div
                className="flex-1 bg-[#111]
                border border-violet-500/20
                rounded-xl
                p-6
                hover:border-violet-500
                hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
                transition-all duration-300"
              >
                <p className="text-violet-400 font-semibold mb-2">
                  {item.year}
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-1">
                  {item.institute}
                </p>

                <p className="text-gray-500 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;