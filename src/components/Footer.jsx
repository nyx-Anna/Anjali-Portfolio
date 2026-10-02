function Footer() {
  return (
    <footer className="bg-black border-t border-violet-500/20">

      <div className="page-container py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo / Name */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Anjali
              <span className="text-violet-500">.</span>
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Web Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#home"
              className="text-gray-400 hover:text-violet-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 hover:text-violet-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-400 hover:text-violet-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-violet-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-violet-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-violet-500/10 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anjali Jha. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Built with 💜
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;