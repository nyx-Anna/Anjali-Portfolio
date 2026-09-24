import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
      relative 
      bg-black 
      flex
      pt-28 
      items-center 
      justify-center 
      overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Skills
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4
        items-center"
        >
          {skills.map((item) => (
            <div
              key={item.title}
              className="bg-[#0B0B0B] 
              border border-violet-500/20 
              rounded-xl 
              p-7
              min-h-[110px]
              hover:border-violet-500
              hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              active:scale-[0.98]
              transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl  text-center font-bold mb-5 text-violet-400">
                {item.title}
              </h3>
              {/* Bages */}
              <div className="flex flex-wrap gap-4">
                {item.technologies.map((skill) => (
                  <span
                    key={skill}
                    className="
                    inline-flex 
                    items-center 
                    justify-center
                    px-5
                    py-2 
                    rounded-xl
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
