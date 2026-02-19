import Image from "next/image";

interface BrandCardProps {
  name: string;
  logo: string;
}

export default function BrandCard({ name, logo }: BrandCardProps) {
  return (
    <div className="flex flex-col items-center gap-[clamp(1rem,2vw,1.5rem)] rounded-sm md:rounded-xl border border-primary bg-gradient-to-b from-white/30 to-primary/[0.06] px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1.5rem,3vw,2.5rem)]">
      {/* Logo */}
      <div className="relative h-[clamp(3.5rem,6vw,5rem)] w-[clamp(3.5rem,6vw,5rem)]">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>

      {/* Brand Name */}
      <h3 className="text-center text-[clamp(1rem,1.5vw,1.5rem)] font-semibold leading-design text-black">
        {name}
      </h3>
    </div>
  );
}
