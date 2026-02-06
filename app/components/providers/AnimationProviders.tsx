"use client";

import LenisProvider from "./LenisProvider";
import AOSProvider from "./AOSProvider";
import { ParallaxProvider } from "react-scroll-parallax";

interface AnimationProvidersProps {
  children: React.ReactNode;
}

export default function AnimationProviders({
  children,
}: AnimationProvidersProps) {
  return (
    <LenisProvider>
      <ParallaxProvider>
        <AOSProvider />
        {children}
      </ParallaxProvider>
    </LenisProvider>
  );
}
