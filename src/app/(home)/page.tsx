import { Separator } from "@/components/ui/separator";
import CihazMotionPage from "@/models/home/cihazlar-paketler/CihazMotionPage";
import DidYouKnowPage from "@/models/home/did-you-know/didYouKnowPage";
import Welcome from "@/models/home/home-first/Welcome";
import { HomeNavbar } from "@/models/home/home-navbar/HomeNavbar";
import KampanyaPage from "@/models/home/kampanya/kampanyaPage";
import NasilmiPage from "@/models/home/nasil-mi/nasilmiPage";

const Page = () => {
  return (
    <main className="scroll-smooth">
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
