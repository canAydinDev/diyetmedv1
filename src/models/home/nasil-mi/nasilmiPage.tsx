import React from "react";

const NasilmiPage = () => {
  return (
    <section id="nasilmi" className="py-12 px-4 md:px-8 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-7xl mx-auto items-center">
        {/* YouTube Video */}

        {/* Text Content */}
        <div className="md:col-span-6 space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            💚 Diyetmed’le Bir Gün! 💚
          </h2>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Sağlıklı ve sürdürülebilir kilo kaybı için düzenli beslenme planı ve
            fiziksel aktivite olmazsa olmazdır. Tek başına mucizevi bir besin ya
            da cihaz yoktur. Ancak doğru stratejilerle hedefinize ulaşmak çok
            daha kolay ve hızlı olabilir. Mersin Yenişehir’de bulunan Diyetmed
            olarak, gelişmiş teknolojiye sahip Vacu Activ ve Roll Shape
            cihazlarımızla kilo verme sürecinizi destekliyoruz.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Haftada sadece 3 seans ile bile fiziksel aktivitenin tamamını
            üstlenerek, yağ yakımını hızlandırır, sıkılaşmayı destekler ve
            metabolizmayı canlandırır. Diyet sürecinizin temel taşı, kişiye özel
            hazırlanan sağlıklı ve dengeli beslenme programına uyum sağlamaktır.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            🌿 Size düşen tek şey, kişiye özel beslenme programınıza uymak ve
            normalden çok daha hızlı aldığınız sonuçların keyfini çıkarmak! 🎯
            💻 Online diyet hizmetimizden yararlanmak için profilimdeki ve web
            sitemdeki iletişim bilgilerinden bize ulaşabilirsiniz! 📩 💚
            Sağlıklı, bilimsel ve sürdürülebilir bir değişim için Diyetmed
            yanınızda! 💚
          </p>
        </div>
        <div className="md:col-span-6 flex justify-center">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/wpz2IlOX2AY"
              title="Diyetmed Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NasilmiPage;
