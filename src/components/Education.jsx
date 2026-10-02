import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="relative bg-black section-space">
      <div className="page-container">
        {/* Heading */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Education
          </h2>
        </div>

        <div>
          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-4 sm:gap-8 mb-6 last:mb-0"
            >
              {/* Circle + Line */}
              <div className="relative shrink-0 w-10 flex justify-center">
                {/* Line — don't render after last circle */}
                {index !== education.length - 1 && (
                  <div
                    className="
                      absolute
                      top-5
                      left-1/2
                      -translate-x-1/2
                      w-[2px]
                      h-[calc(100%+1.5rem)]
                      bg-violet-500/30
                    "
                  ></div>
                )}

                {/* Circle */}
                <div
                  className="
                    relative z-10
                    w-10 h-10
                    rounded-full
                    bg-violet-600
                    shadow-[0_0_20px_rgba(139,92,246,0.4)]
                  "
                ></div>
              </div>

              {/* Card */}
              <div
                className="
                  flex-1
                  bg-[#111]
                  border border-violet-500/20
                  rounded-xl
                  p-6
                  hover:border-violet-500
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
                  transition-all duration-300
                "
              >
                <p className="text-violet-400 font-semibold mb-2">
                  {item.year}
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-1">{item.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
