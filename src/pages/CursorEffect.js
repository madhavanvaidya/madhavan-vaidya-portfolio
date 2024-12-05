import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      // Create an electrifying trail
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      document.body.appendChild(trail);
      trail.style.left = `${mouseX - trail.offsetWidth / 2}px`;
      trail.style.top = `${mouseY - trail.offsetHeight / 2}px`;

      // Fade out the trail after animation
      setTimeout(() => {
        trail.remove();
      }, 800); // Remove after 800ms
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* CSS Styles */}
      <style>
        {`
          .cursor-trail {
            position: absolute;
            width: 15px;
            height: 15px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 20px 3px rgba(255, 105, 180, 0.8), 0 0 40px 6px rgba(255, 223, 0, 0.6);
            animation: electrify 0.8s ease-out forwards;
          }

          @keyframes electrify {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default CursorEffect;
