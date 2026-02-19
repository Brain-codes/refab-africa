"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Background change: past 100dvh
      setScrolled(currentY > viewportHeight);

      // Hide/show: only after 100dvh
      if (currentY > viewportHeight) {
        setHidden(currentY > lastScrollY.current); // scrolling down = hide
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-primary-deepest" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-5 py-5 sm:px-8 md:px-12 lg:px-[115px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Refab Africa Logo"
            width={86}
            height={82}
            className="h-[40px] w-[42px] md:h-[53px] md:w-[56px] lg:h-[67px] lg:w-[71px]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-[56px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`font-clash text-md font-semibold leading-design transition-colors duration-200 ${
                  activeLink === link.name
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`font-clash text-lg font-semibold leading-design transition-colors duration-200 ${
                  activeLink === link.name
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
