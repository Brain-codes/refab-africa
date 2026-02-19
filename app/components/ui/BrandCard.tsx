import Image from "next/image";

interface BrandCardProps {
  name: string;
  logo: string;
}

export default function BrandCard({ name, logo }: BrandCardProps) {
  return (
    <div className="flex flex-col items-center gap-[clamp(0.82rem,1.65vw,1.23rem)] rounded-sm md:rounded-xl border border-primary bg-gradient-to-b from-white/30 to-primary/[0.06] px-[clamp(1.23rem,2.5vw,2rem)] py-[clamp(1.23rem,2.5vw,2rem)]">
      {/* Logo */}
      <div className="relative h-[clamp(2.87rem,4.9vw,4.1rem)] w-[clamp(2.87rem,4.9vw,4.1rem)]">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>

      {/* Brand Name */}
      <h3 className="text-center text-[clamp(0.82rem,1.23vw,1.23rem)] font-semibold leading-design text-black">
        {name}
      </h3>
    </div>
  );
}
