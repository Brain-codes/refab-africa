import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const exploreLinks = [
  { name: "About Refab Africa", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Impact", href: "/impact" },
  { name: "Collaborate", href: "/collaborate" },
  { name: "Contact", href: "/contact" },
];

const getInvolvedLinks = [
  { name: "Partner With Us", href: "/contact" },
  { name: "Collaborate", href: "/collaborate" },
  { name: "Start a Conversation", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full bg-primary-deepest px-[5%] pt-[clamp(2.5rem,5vw,4.5rem)] pb-[clamp(1.65rem,3.3vw,2.5rem)]">
      <div className="mx-auto max-w-[1728px]">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-[clamp(2rem,4.1vw,3.3rem)] lg:grid-cols-[1fr_auto_auto]">
          {/* Left: Logo + tagline + social */}
          <FadeIn direction="up" delay={0}>
            <div className="flex flex-col gap-[clamp(1.23rem,2.5vw,1.65rem)]">
              <Link href="/" aria-label="Refab Africa home">
                <Image
                  src="/logo.svg"
                  alt="Refab Africa Logo"
                  width={86}
                  height={82}
                  className="h-[49px] w-auto"
                />
              </Link>

              <p className="max-w-[30rem] font-clash text-md font-normal leading-design text-white">
                Transforming textile waste into meaningful impact through
                creativity, collaboration, and sustainability.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-[25px] w-[25px] items-center justify-center text-white transition-colors duration-200 hover:text-primary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Middle: Explore */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-col gap-[clamp(0.82rem,1.65vw,1.23rem)]">
              <span className="font-clash text-md font-bold leading-design text-primary">
                Explore
              </span>
              <StaggerContainer
                className="flex flex-col gap-[clamp(0.62rem,1.2vw,0.82rem)]"
                stagger={0.06}
              >
                {exploreLinks.map(({ name, href }) => (
                  <StaggerItem key={name}>
                    <Link
                      href={href}
                      className="font-clash text-md font-semibold leading-design text-white transition-colors duration-200 hover:text-primary"
                    >
                      {name}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right: Get Involved */}
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col gap-[clamp(0.82rem,1.65vw,1.23rem)]">
              <span className="font-clash text-md font-bold leading-design text-primary">
                Get Involved
              </span>
              <StaggerContainer
                className="flex flex-col gap-[clamp(0.62rem,1.2vw,0.82rem)]"
                stagger={0.06}
              >
                {getInvolvedLinks.map(({ name, href }) => (
                  <StaggerItem key={name}>
                    <Link
                      href={href}
                      className="font-clash text-md font-semibold leading-design text-white transition-colors duration-200 hover:text-primary"
                    >
                      {name}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <hr className="my-[clamp(1.65rem,3.3vw,2.5rem)] border-t border-white opacity-[0.37]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-clash text-base font-medium leading-design text-white">
            © 2026 Refab Africa. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="font-clash text-md font-normal leading-design text-white transition-colors duration-200 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <span
              className="font-clash font-normal leading-none text-primary"
              style={{ fontSize: "clamp(1.65rem,3.3vw,3.3rem)" }}
              aria-hidden="true"
            >
              •
            </span>
            <Link
              href="/legal"
              className="font-clash text-md font-normal leading-design text-white transition-colors duration-200 hover:text-primary"
            >
              Legal Documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
