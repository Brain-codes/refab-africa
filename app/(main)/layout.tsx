import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimationProviders from "../components/providers/AnimationProviders";

const BASE_URL = "https://refabafrica.tacommunity.org";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Refab Africa",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    description:
      "Refab Africa transforms textile waste into meaningful products while empowering communities through collaboration, circular fashion, and sustainable impact across Africa.",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimationProviders>
        <Navbar />
        {children}
        <Footer />
      </AnimationProviders>
    </>
  );
}
