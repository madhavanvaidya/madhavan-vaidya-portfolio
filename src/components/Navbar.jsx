import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-600 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-white text-2xl font-bold">Madhavan Vaidya</h1>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#resume" className="hover:underline">Resume</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
