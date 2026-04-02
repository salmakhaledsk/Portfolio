import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pl-5 py-10 border-t border-gray-800 ">
      <p>
        © {new Date().getFullYear()} Salma Khaled. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
