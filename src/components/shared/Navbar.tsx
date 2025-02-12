"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react"; // Import useMemo
import Social from "../ui/Social";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter(); // Use Next.js router for Dashboard navigation

  // Wrap navLinks in useMemo to prevent unnecessary re-renders
  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home", isExternal: false },
      { href: "#blogs", label: "Blogs", isExternal: false },
      { href: "#about", label: "About Us", isExternal: false },
      { href: "#services", label: "Services", isExternal: false },
      { href: "#projects", label: "Projects", isExternal: false },
      { href: "#support", label: "Support", isExternal: false },
      { href: "/dashboard", label: "Dashboard", isExternal: true }, // External navigation
    ],
    [] // Empty dependency array means navLinks won't change unless we explicitly modify it
  );

  // Function to handle scrolling for internal links
  const handleScroll = useCallback(() => {
    const sections = navLinks
      .filter(link => !link.isExternal) // Only check internal sections
      .map(link => document.querySelector(link.href));

    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (section && section instanceof HTMLElement) {
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
  }, [navLinks]); // Memoized navLinks as a dependency

  // Handle clicking on a nav link
  const handleClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      router.push(href); // Navigate only for external links like "Dashboard"
    } else {
      setActiveSection(href.slice(1)); // Update active section for internal links
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: (section as HTMLElement).offsetTop - 50, // Adjust for fixed navbar
          behavior: "smooth",
        });
      }
    }
  };

  // UseEffect to track scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Use handleScroll as a dependency

  return (
    <nav className="flex justify-between bg-slate-500 bg-opacity-100 p-4 w-full fixed top-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl text-teal-500 font-bold">AnciShan</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {navLinks.map(({ href, label, isExternal }) => (
          <button
            key={href}
            onClick={() => handleClick(href, isExternal)} // Handle click for internal & external links
            className={`${
              activeSection === href.slice(1) && !isExternal
                ? "text-teal-600 font-bold"
                : "text-blue-300 hover:text-teal-700"
            } transition-colors duration-300`}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
