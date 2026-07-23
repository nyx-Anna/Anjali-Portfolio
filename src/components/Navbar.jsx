import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import profile from "../assets/profile.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-black backdrop-blur-md z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Anjali Jha"
            className="w-10 h-10 rounded-full object-cover border-2 border-violet-400
            shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110 hover:rotate-5"
          />
          {/* Logo */}
          <h1
            className="text-2xl text-violet-400"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[15px] text-gray-300 hover:text-violet-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-t border-white/10">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 text-gray-300 hover:text-violet-400"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
