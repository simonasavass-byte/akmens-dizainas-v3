import SEO from "@/components/SEO";
import Hero from "@/components/site/Hero";
import HomeServices from "@/components/site/HomeServices";
import Materials from "@/components/site/Materials";
import Gallery from "@/components/site/Gallery";
import Trust from "@/components/site/Trust";
import CtaBlock from "@/components/site/CtaBlock";

const ld = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Akmens Darbai",
  description:
    "Paminklų gamyba, paminklų graviravimas ir kapų dengimas plokštėmis Vilniuje ir Elektrėnuose.",
  areaServed: ["Vilnius", "Elektrėnai", "Lietuva"],
  address: [
    { "@type": "PostalAddress", streetAddress: "Kalvarijų g. 125", postalCode: "LT-08221", addressLocality: "Vilnius", addressCountry: "LT" },
    { "@type": "PostalAddress", streetAddress: "Rungos g. 18", addressLocality: "Elektrėnai", addressCountry: "LT" },
  ],
  telephone: ["+37052752628", "+37069870380"],
  email: "info@akmensdarbai.lt",
};

const Index = () => {
  return (
    <>
      <SEO
        title="Akmens Darbai — granito paminklai Vilniuje ir Elektrėnuose"
        description="Paminklų gamyba, paminklų graviravimas ir kapų dengimas plokštėmis Vilniuje ir Elektrėnuose."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero />
      <HomeServices />
      <Materials />
      <Gallery />
      <Trust />
      <CtaBlock />
    </>
  );
};

export default Index;
