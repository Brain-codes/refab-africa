"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface NavLink {
  name: string;
  href: string;
  number: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/", number: "01" },
  { name: "About", href: "/about", number: "02" },
  { name: "Portfolio", href: "/projects", number: "03" },
  { name: "Contact", href: "/contact", number: "04" },
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

      setScrolled(currentY > viewportHeight);

      if (currentY > viewportHeight) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    // ⚠️ The nav element itself has NO transform — if it did, `fixed` children
    // would be positioned relative to the nav's box, not the viewport.
    // The slide animation lives on the inner wrapper below instead.
    <nav className="fixed left-0 top-0 z-50 w-full">

      {/* ── Nav bar row — transform lives HERE, not on <nav> ── */}
      <div
        className={`relative z-[50] transition-all duration-300 ${
          hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || isOpen ? "bg-primary-deepest" : "bg-transparent"}`}
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

          {/* Mobile Hamburger → X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
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
      </div>

      {/* ── Mobile full-screen overlay ──
          Sibling of the nav bar wrapper (NOT inside it), so its `fixed inset-0`
          positions relative to the viewport, not the wrapper's transform box. ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-primary-deepest md:hidden"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Left green accent bar */}
            <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-primary" />

            {/* Nav links — centred vertically, padded below the navbar strip */}
            <div className="flex flex-1 flex-col justify-center px-8 pt-[clamp(4rem,15vw,6rem)]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.4,
                    ease: "easeOut" as const,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsOpen(false);
                    }}
                    className={`group flex w-full items-center justify-between border-b py-[clamp(1rem,4vw,1.4rem)] transition-colors duration-200 ${
                      activeLink === link.name
                        ? "border-primary/40"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-baseline gap-[clamp(0.75rem,3vw,1.1rem)]">
                      {/* Step number */}
                      <span className="text-[0.65rem] font-bold text-primary/50">
                        {link.number}
                      </span>
                      {/* Link name */}
                      <span
                        className={`text-[clamp(2.4rem,9vw,3.2rem)] font-extrabold leading-none tracking-tight transition-colors duration-200 ${
                          activeLink === link.name
                            ? "text-primary"
                            : "text-white group-hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`text-[1.1rem] transition-all duration-300 group-hover:translate-x-1 ${
                        activeLink === link.name
                          ? "text-primary"
                          : "text-white/20 group-hover:text-primary"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom tagline */}
            <motion.div
              className="px-8 pb-[clamp(2rem,8vw,3rem)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-white/10" />
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/25">
                  Redefining textile waste
                </p>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
