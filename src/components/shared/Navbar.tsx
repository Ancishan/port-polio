"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Social from "../ui/Social";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#blogs", label: "Blogs" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#support", label: "Support" },
  ];

  // Function to handle the scroll event and detect the active section
  const handleScroll = () => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (section && section instanceof HTMLElement) { // Casting to HTMLElement
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition <= sectionTop + sectionHeight / 3
        ) {
          setActiveSection(section.id);
        }
      }
    });
  };

  // Handle clicking on a nav link
  const handleClick = (sectionId : string) => {
    setActiveSection(sectionId);
  };

  // Use effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between bg-gradient-to-r from-slate-600 bg-opacity-100 p-4 w-full fixed top-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl text-teal-500 font-bold">AnciShan</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => handleClick(href.slice(1))}  // Update active section on click
            className={`${
              activeSection === href.slice(1) // Remove '#' and compare
                ? "text-teal-600 font-bold"
                : "text-blue-300 hover:text-teal-700"
            } transition-colors duration-300`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div>
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
