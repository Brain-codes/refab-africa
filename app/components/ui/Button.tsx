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
  "inline-flex items-center justify-center rounded-sm py-[clamp(0.72rem,1.23vw,0.92rem)] px-[clamp(1.65rem,3.3vw,2.6rem)] text-[clamp(0.72rem,1vw,1rem)] font-bold leading-design transition-colors";

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
