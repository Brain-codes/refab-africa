"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="w-full bg-black">
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-6 py-7 sm:px-10 md:px-16 lg:px-[141px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Refab Africa Logo"
            width={86}
            height={82}
            className="h-[50px] w-[52px] md:h-[65px] md:w-[68px] lg:h-[82px] lg:w-[86px]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex lg:gap-[69px]">
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
