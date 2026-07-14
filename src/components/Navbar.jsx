import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
function Navbar() {
  //Here, First item = current value , second item = function to update it, so menuOpen stores true or false And setMenuOpen() changes it.
  const [menuOpen, setMenuOpen] = useState(false);
  const navLink = "cursor-pointer hover:text-purple-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#10002b]/80 backdrop-blur-md border-b border-white/10 z-50">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Anjali Jha
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className={navLink}>Home</li>

          <li className={navLink}>About</li>

          <li className={navLink}>Skills</li>

          <li className={navLink}>Projects</li>

          <li className={navLink}>Contact</li>
        </ul>
        <button className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full transition">
          Resume
        </button>

        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          >
            {menuOpen ? (
              <HiX size={30} className="text-white" />
            ) : (
              <HiMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#240046] text-white">
          <ul className="flex flex-col items-center gap-6 py-8">
            <li className={navLink}>Home</li>

            <li className={navLink}>About</li>

            <li className={navLink}>Skills</li>

            <li className={navLink}>Projects</li>

            <li className={navLink}>Contact</li>

            <li>
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full transition">
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
