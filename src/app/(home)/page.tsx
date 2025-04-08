import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import CihazMotionPage from "@/models/home/cihazlar-paketler/CihazMotionPage";
import DidYouKnowPage from "@/models/home/did-you-know/didYouKnowPage";
import Welcome from "@/models/home/home-first/Welcome";
import { HomeNavbar } from "@/models/home/home-navbar/HomeNavbar";
import KampanyaPage from "@/models/home/kampanya/kampanyaPage";
import NasilmiPage from "@/models/home/nasil-mi/nasilmiPage";

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
