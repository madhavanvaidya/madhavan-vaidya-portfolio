import React, { useState, useEffect, useRef } from "react";
import CursorEffect from "./CursorEffect";
import portalxImage from "../pages/img/portalx.png";
import adhsheImage from "../pages/img/adhshe.png";
import ecohireImage from "../pages/img/ecohire.jpg";
import agricultureImage from "../pages/img/agriculture.webp";
function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

      const sections = ["#home", "#about", "#projects", "#contact"];
      for (let section of sections) {
        const element = document.querySelector(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
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
                className="px-8 py-3 bg-orange-600 rounded-full hover:bg-pink-600 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                View Projects
              </a>
            </li>
          </ul>
        </section>

        {/* Header with sticky navbar */}
        <header
          className={`py-8 bg-gray-800 bg-opacity-75 shadow-md ${
            isSticky ? "fixed top-0 left-0 right-0 z-10" : "relative"
          }`}
        >
          <nav className="px-16 mx-auto flex justify-between items-center">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="font-extrabold text-2xl text-dark-orange"
            >
              Madhavan Vaidya
            </a>

            {/* Hamburger Menu Button */}
            <button
              className="sm:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul
              className={`sm:flex sm:space-x-8 text-lg font-semibold ${
                isMenuOpen ? "block" : "hidden"
              } sm:block absolute sm:relative top-16 left-0 sm:top-auto sm:left-auto w-full sm:w-auto bg-gray-800 sm:bg-transparent px-8 sm:px-0 text-right sm:text-left`}
            >
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href} className="py-2 sm:py-0">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`block ${
                      activeSection === item.href
                        ? "text-dark-orange"
                        : "text-white"
                    } hover:text-accent transition duration-300`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="py-20 bg-gray-900 text-white flex flex-col md:flex-row items-center md:items-start justify-between px-8"
        >
          <div className="md:w-1/2 text-center md:text-left px-10">
            <h2 className="text-4xl font-extrabold mb-6">
              About <span className="text-dark-orange">Me</span>.
            </h2>
            <p className="text-lg leading-7">
              I'm a dedicated Full Stack Developer with a strong foundation in
              building dynamic, scalable web applications. Proficient in
              front-end and back-end technologies, including ReactJS, Node.js,
              Express.js, and MongoDB, I thrive on solving complex challenges
              and crafting intuitive user experiences. Beyond coding, I enjoy
              diving into the latest tech trends, staying fit, and expanding my
              skill set through lifelong learning, also play guitar sometimes!
            </p>
            <a
              href="https://drive.google.com/file/d/1VlV9E1kZcK1VV8b5uxh7QLG9_QgotKVK/view?usp=drive_link" // Replace with your actual resume URL
              className="mt-6 inline-block px-8 py-3 bg-dark-orange text-white rounded-full hover:bg-pink-600 transition duration-300"
              download
            >
              Download Resume
            </a>
          </div>

          {/* Right Section: Skills */}
          <div className="md:w-1/2 flex flex-wrap justify-center items-center gap-6 mt-10 md:mt-0 px-10">
            {/* Skill Icons */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/color/96/html-5.png"
                alt="HTML"
              />
              <span className="text-sm mt-2">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/css3.png" alt="CSS" />
              <span className="text-sm mt-2">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/color/96/javascript.png"
                alt="JavaScript"
              />
              <span className="text-sm mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ultraviolet/96/react.png"
                alt="ReactJS"
              />
              <span className="text-sm mt-2">ReactJS</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                alt="Node.js"
              />
              <span className="text-sm mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=z228V7A9QyTv&format=png&color=000000"
                alt="Express.js"
              />
              <span className="text-sm mt-2">Express.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/color/96/python.png"
                alt="Python"
              />
              <span className="text-sm mt-2">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
                alt="Java"
              />
              <span className="text-sm mt-2">Java</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000"
                alt="C"
              />
              <span className="text-sm mt-2">C</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                alt="C++"
              />
              <span className="text-sm mt-2">C++</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=ew8X3wM9rXiK&format=png&color=000000"
                alt="PHP"
              />
              <span className="text-sm mt-2">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=qfQaIYKX23qY&format=png&color=000000"
                alt="Laravel"
              />
              <span className="text-sm mt-2">Laravel</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=17842&format=png&color=000000"
                alt="Linux"
              />
              <span className="text-sm mt-2">Linux</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                alt="MongoDB"
              />
              <span className="text-sm mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF"
                alt="MySQL"
              />
              <span className="text-sm mt-2">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000"
                alt="Power BI"
              />
              <span className="text-sm mt-2">Power BI</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/git.png" alt="Git" />
              <span className="text-sm mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
                alt="GitHub"
              />
              <span className="text-sm mt-2">GitHub</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-16">
          <h2 className="text-4xl font-extrabold mb-6">
            My <span className="text-dark-orange">Projects</span>
          </h2>

          {/* Project 1 */}
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-1/2">
              <img
                src={portalxImage}
                alt="PortalX"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left pl-6 py-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                Portal<span className="text-dark-orange">X</span>
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                PortalX is an innovative platform designed to streamline
                internship management, bridging the gap between academia and
                industry. Built for the students, by the students of the
                University of Windsor.
              </p>
              <p className="text-2xl text-white mb-3">
                Developed using <span className="text-dark-orange">MERN</span>{" "}
                stack.
              </p>

              <div className="my-4">
                <a
                  href="https://github.com/its-namangoyal/PortalX"
                  className="inline-block bg-dark-orange text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-wrap items-center my-20">
            <div className="w-full md:w-1/2">
              <img
                src={adhsheImage} // Replace with the correct image path
                alt="ADHShe"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left pl-6 py-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                ADH<span className="text-dark-orange">She</span>
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                ADHShe is an innovative tool designed to help women manage ADHD
                symptoms, particularly in relation to their menstrual cycles. It
                provides personalized insights and therapy recommendations to
                improve symptom and medication management, enhancing the quality
                of life for women with ADHD.
              </p>
              <p className="text-2xl text-white mb-3">
                Developed using{" "}
                <span className="text-dark-orange">Scrum Agile Framework</span>{" "}
                and <span className="text-dark-orange">MERN</span> stack.
              </p>

              <div className="my-4">
                <a
                  href="https://github.com/madhavanvaidya/adhshe" // Replace with the correct link
                  className="inline-block bg-dark-orange text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-wrap items-center my-20">
            <div className="w-full md:w-1/2">
              <img
                src={ecohireImage} // Replace with the correct image path
                alt="EcoHire"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left pl-6 py-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                Eco<span className="text-dark-orange">Hire</span>
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                EcoHire is a web-based platform connecting job seekers with
                eco-friendly and sustainability-focused job opportunities. It
                promotes environmentally responsible practices by featuring job
                listings from companies committed to sustainability.
              </p>
              <p className="text-2xl text-white mb-3">
                Developed using{" "}
                <span className="text-dark-orange">Python, Django</span>, and{" "}
                <span className="text-dark-orange">PostgreSQL</span>.
              </p>

              <div className="mb-4">
                <a
                  href="https://github.com/ishaan1212/EcoHire" // Replace with the correct link
                  className="inline-block bg-dark-orange text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-wrap items-center my-20">
            <div className="w-full md:w-1/2">
              <img
                src={agricultureImage} // Replace with the correct image path
                alt="Crop Yield Prediction"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left pl-6 py-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                Crop Yield <span className="text-dark-orange">Prediction</span>
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                This project focuses on developing predictive models for crop
                yield estimation, especially for wheat, using Decision Tree
                algorithms. It aims to improve agricultural planning and
                decision-making by addressing challenges related to weather
                patterns and fluctuating rainfall.
              </p>
              <p className="text-2xl text-white mb-3">
                Developed using <span className="text-dark-orange">Python</span>{" "}
                and <span className="text-dark-orange">Machine Learning</span>.
              </p>

              <div className="mb-4">
                <a
                  href="https://github.com/madhavanvaidya/crop_yield_prediction" // Replace with the correct link
                  className="inline-block bg-dark-orange text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 text-center text-3xl font-extrabold">
            <a
              href="https://github.com/madhavanvaidya" // Replace with your GitHub repository link
              className="inline-block bg-dark-orange text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
            >
              More Projects
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-16 bg-gray-800">
          <h2 className="text-4xl font-extrabold mb-6">
            Contact <span className="text-dark-orange">Me</span>.
          </h2>
          <p className="text-lg mb-6">
            Feel free to reach out via email or social media!
          </p>
          <div className="flex flex-wrap justify-between">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <form
                action="mailto:madhavanvaidya@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-dark-orange text-white py-3 rounded-full hover:bg-pink-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Media Buttons */}
            <div className="w-full md:w-1/2 flex justify-center items-center space-x-8">
              <a
                href="https://www.instagram.com/whomadhavan"
                className="text-white hover:text-pink-600"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/madhavan-vaidya"
                className="text-white hover:text-pink-600"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/madhavanvaidya"
                className="text-white hover:text-pink-600"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-800 text-center text-sm text-gray-400">
        <p>&copy; 2024 Madhavan Vaidya</p>
      </footer>
    </div>
  );
}

export default App;
