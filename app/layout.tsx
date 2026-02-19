import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimationProviders from "./components/providers/AnimationProviders";

export const metadata: Metadata = {
  title: "Refab Africa",
  description: "Refab Africa - Portfolio & Creative Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-clash antialiased">
        <AnimationProviders>
          <Navbar />
          {children}
          <Footer />
        </AnimationProviders>
      </body>
    </html>
  );
}
