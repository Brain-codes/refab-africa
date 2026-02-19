import { FadeIn } from "./animations";

const contacts = [
  {
    label: "+2349067654343",
    href: "tel:+2349067654343",
    ariaLabel: "Call us",
  },
  {
    label: "tacommunityinfo@gmail.com",
    href: "mailto:tacommunityinfo@gmail.com",
    ariaLabel: "Email us",
  },
  {
    label: "Abuja, Nigeria",
    href: "https://maps.google.com?q=Abuja+Nigeria",
    ariaLabel: "Find us on the map",
  },
];

export default function ContactInfo() {
  return (
    <section className="w-full border-y border-primary bg-background px-[5%] py-[clamp(2rem,4.1vw,4.1rem)]">
      <FadeIn direction="up">
        <div className="mx-auto flex max-w-[938px] flex-wrap items-center justify-center gap-[clamp(0.82rem,1.65vw,1.65rem)]">
          {contacts.map(({ label, href, ariaLabel }) => (
            <a
              key={label}
              href={href}
              aria-label={ariaLabel}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-[10px] border border-primary/40 bg-primary-light px-5 py-[clamp(0.92rem,1.2vw,1.18rem)] text-[clamp(0.72rem,1vw,1rem)] font-semibold leading-design text-primary transition-colors hover:bg-primary hover:text-white hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
