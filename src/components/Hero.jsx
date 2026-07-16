function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-20 "
    >
      {/* Purple glow */}
      <div className="absolute top-24 right-1/2 translate-x-1/2 w-125 h-125 bg-violet-600/20 rounded-full blur-[140px]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 rounded-full bg-violet-900/40 border border-violet-500/30 text-violet-300 text-sm">
            Available for Work
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Hey! , I am <span className="text-violet-500">Anjali Jha</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mt-5">
          Web Developer
        </h2>

        <p className="max-w-175 mx-auto mt-8 text-gray-400 leading-9 text-lg">
          I craft beautiful, functional digital experiences that bring ideas to
          life. Passionate about creating responsive web applications with
          modern technologies and intuitive user experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <button className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 transition duration-300 font-medium">
            View My Work
          </button>

          <button className="px-8 py-3 rounded-full border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 font-medium">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
