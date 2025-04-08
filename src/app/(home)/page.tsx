import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import CihazMotionPage from "@/models/home/cihazlar-paketler/CihazMotionPage";
import DidYouKnowPage from "@/models/home/did-you-know/didYouKnowPage";
import Welcome from "@/models/home/home-first/Welcome";
import { HomeNavbar } from "@/models/home/home-navbar/HomeNavbar";
import KampanyaPage from "@/models/home/kampanya/kampanyaPage";
import NasilmiPage from "@/models/home/nasil-mi/nasilmiPage";
import Script from "next/script"; // 👈 Schema için gerekli

// ✅ SEO: Metadata objesi
export const metadata: Metadata = {
  title:
    "Uzman Diyetisyen | Mersin | Kaçırılmayacak Yaza Hazırlık Çekilişi! | Vacu Activ & Roll Shape",
  description:
    "Diyetmed ile Vacu Activ ve Roll Shape cihazlarıyla yaza hazırlan! Çekilişe katıl, sağlıklı dönüşüm yolculuğunu başlat!",
};

const Page = () => {
  return (
    <main className="scroll-smooth">
      {/* ✅ SEO: sr-only H1 etiketi */}
      <h1 className="sr-only">
        Uzman Diyetisyen | Mersin | Kaçırılmayacak Yaza Hazırlık Çekilişi! |
        Vacu Activ & Roll Shape
      </h1>

      {/* ✅ STRUCTURED DATA SCHEMA */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Diyetmed",
            image: "https://www.diyetmed.com/logo.png", // varsa logonun tam URL'si
            url: "https://www.diyetmed.com",
            telephone: "+90 555 555 55 55",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Atatürk Caddesi No:5",
              addressLocality: "Mersin",
              addressRegion: "İçel",
              postalCode: "33000",
              addressCountry: "TR",
            },
            priceRange: "$$",
            openingHours: ["Mo-Fr 09:00-18:00"],
            description:
              "Mersin’de uzman diyetisyen desteği ve Vacu Activ & Roll Shape ile sağlıklı yaşamın kapılarını aralayın.",
            medicalSpecialty: "Nutrition",
          }),
        }}
      />

      {/* Sayfa içeriği */}
      <HomeNavbar />
      <Welcome />
      <KampanyaPage />
      <Separator />
      <NasilmiPage />
      <Separator />
      <CihazMotionPage />
      <DidYouKnowPage />
      <Separator />
    </main>
  );
};

export default Page;
