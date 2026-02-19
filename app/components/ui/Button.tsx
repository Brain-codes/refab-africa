import Link from "next/link";

type ButtonVariant = "primary" | "primary-dark" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & (
  | { href: string; type?: never }
  | { href?: never; type: "submit" }
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  "primary-dark":
    "bg-primary-dark text-white hover:bg-primary",
  outline:
    "border border-primary bg-primary-light text-primary hover:bg-primary hover:text-white",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-sm py-[clamp(0.875rem,1.5vw,1.125rem)] px-[clamp(2rem,4vw,3.1875rem)] text-[clamp(0.875rem,1.2vw,1.25rem)] font-bold leading-design transition-colors";

export default function Button({
  variant = "primary",
  href,
  type,
  children,
  className = "",
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (type === "submit") {
    return (
      <button type="submit" className={styles}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href!} className={styles}>
      {children}
    </Link>
  );
}
