import Image from "next/image";
import Link from "next/link";
import React from "react";

const HakkimdaPage = () => {
  return (
    <section>
      <div className="flex flex-col p-3 md:p-10 m-2 md:m-5">
        <div className=" space-y-4 ">
          <h2 className="text-xl font-semibold leading-relaxed">
            Uzman Diyetisyen Cansu Arslanbaş;
          </h2>
          <p className="text-lg">
            Eğitim hayatı boyunca çeşitli etkinliklerde ve sosyal projelerde
            aktif olarak yer almıştır. Lisans ve yüksek lisans sürecinde
            özellikle{" "}
            <span className="font-medium"> “Anne ve Çocuk Beslenmesi”</span> ve
            <span className="font-medium"> “Toplu Beslenme Sistemleri” </span>
            alanlarına ilgi duymuş, staj yaptığı hastanelerde bu konularda
            deneyim kazanarak beslenme biliminin farklı yönlerini keşfetme
            fırsatı bulmuştur.
          </p>
          <p className="text-lg">
            Akademik çalışmalarına erken çocukluk dönemindeki beslenmenin
            önemini vurgulayan{" "}
            <span className="font-medium ">
              0-2 yaş çocuk beslenmesi üzerine yazdığı yüksek lisans teziyle
            </span>{" "}
            devam etmiştir.
          </p>
          <p className="text-lg">
            Bu alandaki bilimsel katkılarını sürdürerek, hakemli bir dergide
            beslenme ve diyetetik alanında yayımlanan{" "}
            <Link
              target="_blank"
              href="https://www.tandfonline.com/doi/full/10.1080/03670244.2025.2454702?casa_token=pZ3McSdJdWMAAAAA%3AelGpw8K-6_d7GXQCRn2FscU1O-W_5dd7M_LS9QeBODNfR2jlnuvILeoUd0uqB-CHX-CIayB043sm"
            >
              <span className="font-bold cursor-pointer animate-pulse">
                akademik makalesiyle{" "}
              </span>
            </Link>
            literatüre katkıda bulunmuştur. Bilimsel gelişmeleri yakından takip
            eden Arslanbaş, beslenme ve diyetetik alanındaki güncel
            araştırmaları ve yayınları inceleyerek mesleki gelişimini
            sürdürmektedir.
          </p>
          <p className="text-lg">
            2024 yılında kurduğu Diyetmed ile bireylere bilimsel temellere
            dayalı, sürdürülebilir ve sağlıklı beslenme alışkanlıkları
            kazandırmayı amaçlamakta ve bu doğrultuda çalışmalarına devam
            etmektedir.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-5 gap-4 md:mt-8 md:mx-5 md:gap-5">
          <div>
            <Image
              src="/images/cv/1.jpg"
              alt="cv-1"
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <Image
              src="/images/cv/2.jpg"
              alt="cv-1"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HakkimdaPage;
