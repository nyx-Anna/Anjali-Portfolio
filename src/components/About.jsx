import profile from "../assets/profile.jpg";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-6 lg:pl-8">
        {/* Heading */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-20 items-center ">
          {/* Left Side */}
          <div className="w-full lg:max-w-[540px] justify-self-center">
            <p className="  text-gray-400 leading-8 mb-16 lg:mb-18 text-justify">
              I'm a passionate Frontend Developer and Computer Science graduate
              who enjoys creating beautiful, responsive, and user-friendly web
              applications. I love turning ideas into interactive digital
              experiences using modern technologies.
            </p>
            <p className="text-gray-400 leading-8 mb-16 lg:mb-18 text-justify">
              My journey started with curiosity and has grown into a passion for
              building websites that are both functional and visually appealing.
              I'm constantly learning experimenting, and improving my skills to
              become a better developer every day.
            </p>
            <p className="text-gray-400 leading-8 text-justify">
              Outside of coding, I enjoy exploring UI designs, learning new
              technologies, and working on personal projects that challenge my
              creativity.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Image */}
              <img
                src={profile}
                alt="Anjali"
                className="relative w-64 sm:w-72 md:w-80 rounded-3xl border-2 border-violet-500 shadow-[0_0_35px_rgba(139,92,246,0.25)] hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
