import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
