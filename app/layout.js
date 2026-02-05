import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Refab Africa",
  description: "Refab Africa - Portfolio & Creative Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-clash antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
