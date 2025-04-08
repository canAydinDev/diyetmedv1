import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/models/home/home-topbar/TopBar";
import FooterPage from "@/models/home/footer/FooterPage";
import Script from "next/script"; // Script'i import etmeyi unutmayın

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Uzman Diyetisyen | Mersin | Kaçırılmayacak Yaza Hazırlık Çekilişi! | Vacu Activ & Roll Shape",
  description:
    "Diyetmed ile Vacu Activ ve Roll Shape cihazlarıyla yaza hazırlan! Çekilişe katıl, sağlıklı dönüşüm yolculuğunu başlat!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* 1. Google Tag Manager kodunu HEAD içine ekleyin */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          // "beforeInteractive": React başlamadan önce yüklenir.
          // "afterInteractive": React yüklendikten sonra (daha geç) yüklenir.
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9T6XMN2');
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        {/* 2. Body açılış etiketinin hemen sonrasına (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9T6XMN2"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <TopBar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
