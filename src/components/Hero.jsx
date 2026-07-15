function Hero() {
  return (
    <section className="min-h-screen bg-[#10002B] text-white pt-30 ">
      <div className="max-w-7xl mx-auto w-full px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            <p>Hi, I'm</p>
            <h1>Anjali Jha</h1>
            <h2>Frontend Developer </h2>
            <p>
              Building clean, responsive interfaces where design meets
              functionality.
            </p>

            <div className="flex gap-4 mt-8 justify-center">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full transition">
                View Projects
              </button>

              <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full transition">
                Resume ↓
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2">Right Side</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
