import React from "react";
import InstagramEmbed from "./instaPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const KampanyaPage = () => {
  return (
    <section id="nasilmi" className="py-12 px-4 md:px-8 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-7xl mx-auto items-center">
        {/* Instagram Embed */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-md">
            <InstagramEmbed />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            YAZA HAZIRLIK ÇEKİLİŞİ ☀️
          </h2>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Çekilişe katılım <strong>Instagram</strong> üzerindendir.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Yaz sadece bir bahane, aslında her mevsim en sağlıklı haline ulaşmak
            senin de hakkın. Vücudunu sevmek, ona iyi bakmak, ideal aralıkta ve
            güçlü hissetmek… Bunu hepimiz kendimize borçluyuz.
            <strong>Geç kalma, şimdi başlama zamanı! 💪</strong>
          </p>

          <p className="text-base md:text-lg text-yellow-600 font-semibold leading-relaxed">
            💛 ÇEKİLİŞ ÖDÜLÜ: <br />6 seans Vacu Activ + 6 seans Roll Shape + 3
            haftalık Beslenme Danışmanlık Paketi hediye!
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            🎁 <strong>Katılmak için:</strong>
            <br />
            ✔️ Bu gönderiyi beğen <br />
            ✔️ <strong>@diyetmed</strong> hesabını takip et <br />
            ✔️ Yorumlara <strong>2 arkadaşını etiketle</strong>
            <br />
            <em>(Her yorum ayrı katılım hakkı!)</em>
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            🕒 <strong>Son katılım:</strong> 28 Nisan Pazar – 23:59
            <br />
            🎉 <strong>Kazanan:</strong> 29 Nisan Pazartesi
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            📌 <strong>Not:</strong> Kazanılan seanslar, 3 hafta içinde (20
            Mayıs’a kadar) kullanılmalıdır.
          </p>

          <p className="text-base md:text-lg text-green-700 font-semibold leading-relaxed">
            Yazı forma girmiş bir bedenle karşılamak isteyenler buraya! 🌿
          </p>
          <div className="pt-4 mx-auto flex justify-center">
            <Button
              variant="my_green"
              className="uppercase animate-bounce  "
              size="lg"
            >
              <Link href="https://www.instagram.com/p/DILuhzEqfsA/">
                🚀 Hemen Katıl
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KampanyaPage;
