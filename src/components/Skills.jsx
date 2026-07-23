import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="relative bg-black py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-violet-700/10 blur-[130px] rounded-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item) => (
            <div
              key={item.title}
              className="bg-[#0B0B0B] border 
              border-violet-500/20 
              rounded-xl 
              p-7
              min-h-[120px]
              hover:border-violet-500
              hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              active:scale-[0.98]
              transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-5 text-violet-400">
                {item.title}
              </h3>
              {/* Bages */}
              <div className="flex flex-wrap gap-3 items-center ">
                {item.technologies.map((skill) => (
                  <span
                    key={skill}
                    className="
                    inline-flex 
                    items-center 
                    justify-center
                    px-5
                    py-2 
                    rounded-full 
                    border border-violet-500 text-gray-300 
                    text-sm 
                    leading-none
                    whitespace-nowrap hover:bg-violet-500 hover:text-white transition-all duration-300 "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
