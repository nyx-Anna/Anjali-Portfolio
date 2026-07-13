function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#10002B]/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h2 className="text-2xl font-bold text-white">Anjali Jha</h2>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-purple-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            Skills
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-purple-400 transition">
            Contact
          </li>
        </ul>

        <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full transition">
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
