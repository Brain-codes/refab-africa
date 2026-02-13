import Link from "next/link";

type ButtonVariant = "primary" | "primary-dark" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  "primary-dark":
    "bg-primary-dark text-white hover:bg-primary",
  outline:
    "border border-primary bg-primary-light text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm py-[clamp(0.875rem,1.5vw,1.125rem)] px-[clamp(2rem,4vw,3.1875rem)] text-[clamp(0.875rem,1.2vw,1.25rem)] font-bold leading-design transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
