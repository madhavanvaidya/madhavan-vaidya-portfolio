import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 py-4">
      <div className="text-center text-white">
        © {new Date().getFullYear()} Madhavan Vaidya. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
