import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const homeSection = document.getElementById("home");

    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add("cursor-home");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-home");
    };

    if (homeSection) {
      homeSection.addEventListener("mousemove", handleMouseMove);
      homeSection.addEventListener("mouseenter", handleMouseEnter);
      homeSection.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (homeSection) {
        homeSection.removeEventListener("mousemove", handleMouseMove);
        homeSection.removeEventListener("mouseenter", handleMouseEnter);
        homeSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return <div className="cursor absolute w-12 h-12 rounded-full bg-orange-600 pointer-events-none transition-all"></div>;
};

export default CursorEffect;
