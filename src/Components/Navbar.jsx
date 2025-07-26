import React, { useState } from 'react';
import AnimatedHamburgerButton from '../animation/Hamburger';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0d1b2a] text-[#e0e1dd] px-6 py-5 shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold cursor-pointer hover:text-[#fdfcdc] duration-300">
          Portfolio
        </h2>

        <div className="md:hidden bg-transparent " onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatedHamburgerButton />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-25 text-lg items-center">
          <li className="cursor-pointer hover:text-[#fdfcdc]">Home</li>
          <li className="cursor-pointer hover:text-[#fdfcdc]">About</li>
          <li className="cursor-pointer hover:text-[#fdfcdc]">Skills</li>
          <li className="cursor-pointer hover:text-[#fdfcdc]">Projects</li>
          <li className="cursor-pointer hover:text-[#fdfcdc]">Contact</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-5 mt-4">
          <li className="cursor-pointer py-2 hover:text-[#fdfcdc]">Home</li>
          <li className="cursor-pointer py-2 hover:text-[#fdfcdc]">About</li>
          <li className="cursor-pointer py-2 hover:text-[#fdfcdc]">Skills</li>
          <li className="cursor-pointer py-2 hover:text-[#fdfcdc]">Projects</li>
          <li className="cursor-pointer py-2 hover:text-[#fdfcdc]">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
