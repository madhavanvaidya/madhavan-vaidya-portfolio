import React, { useState, useEffect, useRef } from "react";
import CursorEffect from "./CursorEffect";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        aboutRef.current &&
        window.scrollY >= aboutRef.current.offsetTop - 100
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <CursorEffect />

      {/* Main content */}
      <main className="bg-gray-900 text-white">
        {/* Home Section */}
        <section
          id="home"
          className="text-center max-w-3xl mx-auto flex justify-center items-center min-h-screen relative"
        >
          <ul className="space-y-6">
            <li className="text-5xl font-extrabold text-gradient ">
              Hello, I'm <span className="text-dark-orange">Madhavan</span>.
            </li>
            <li className="text-xl">I'm a full stack web developer.</li>
            <li>
              <a
                href="#projects"
                className="px-8 py-3 bg-orange-600 text-black rounded-full hover:bg-pink-600 transition duration-300"
              >
                View Projects
              </a>
            </li>
          </ul>
        </section>

        {/* Header with sticky navbar */}
        <header
          className={`py-8 bg-gray-800 bg-opacity-50 shadow-md ${
            isSticky ? "fixed top-0 left-0 right-0 z-10" : "relative"
          }`}
        >
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="#home" className="text-accent font-bold text-xl">
              Madhavan Vaidya
            </a>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 bg-gray-800">
          <h2 className="text-3xl font-extrabold text-center mb-6">About Me</h2>
          <p className="text-lg text-center">
            I am a software developer with experience in building web
            applications using modern technologies...
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-extrabold text-center mb-6">
            My Projects
          </h2>
          <p className="text-lg text-center">
            Here are a few projects that I've worked on:
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <h2 className="text-3xl font-extrabold text-center mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-center">
            Feel free to reach out via email or social media!
          </p>
        </section>
      </main>

      <footer className="py-6 bg-gray-800 text-center text-sm text-gray-400">
        <p>&copy; 2024 Madhavan Vaidya</p>
      </footer>
    </div>
  );
}

export default App;
