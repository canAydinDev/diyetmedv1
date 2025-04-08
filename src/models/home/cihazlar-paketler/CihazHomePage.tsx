import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CihazHomePage() {
  const cihazlar = [
    {
      url: "/images/cihazlar-3.png",
      name: "Vacu Active",
      desc: `Vacuactiv, vakum, kızılötesi, ozon terapisi ve lenf drenajı
      teknolojilerini birleştirerek maksimum kalori yakımını destekleyen
      yenilikçi bir zayıflama cihazıdır. Negatif vakum direnci ve ısıtma
      özelliğiyle kilo verme, incelme, kas gelişimi ve fazla suyun atılmasına
      yardımcı olur. Ozon terapisi ile cildi canlandırırken, lenf drenajı
      sayesinde toksinlerin atılmasını hızlandırır. Spor salonuna vakti
      olmayanlar için ideal olup, aynı zamanda spa ve wellness deneyimi sunar.`,
    },
    {
      url: "/images/cihazlar-2.png",
      name: "Rollshape",
      desc: ` Rollshape, 2.500 yıllık Uzakdoğu masaj tekniğini modern teknolojiyle
        buluşturan ileri teknolojili bir masaj cihazıdır. IR teknolojisi ve özel
        masaj teknikleri sayesinde, cildin sıkılaşmasını destekler, gevşeyen ve
        sarkan bölgeleri toparlar. Selülite karşı etkili bir çözüm sunarak, kan
        dolaşımını hızlandırır ve yağ yakımını destekler. Fiziksel aktivitelere
        ek olarak, lenf drenajını teşvik eden masajlarıyla vücudu şekillendirir
        ve rahatlatıcı bir spa deneyimi sunar.`,
    },
    {
      url: "/images/cihazlar-1.png",
      name: "Perfecto",
      desc: `Klinik testlerle onaylanmış Japon teknolojisine sahip Tartı Perfecto,
      doğru ve güvenilir ölçümlerle vücut kompozisyonunuzu detaylı şekilde
      analiz eder. Yağ, yağsız vücut kitlesi, kas, sıvı ve ödem oranlarını
      hassasiyetle ölçerek bilinçli ve sağlıklı bir takip süreci sunar.
      Profesyonel doğruluk ve güvenilir sonuçlarla ölçüm deneyiminizi bir üst
      seviyeye taşıyın!`,
    },
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {cihazlar.map((cihaz, i) => {
        const { url, name, desc } = cihaz;

        return (
          <SwiperSlide key={i} className="mt-20 h-[350px] ">
            <div className="grid grid-cols-12 items-center  gap-x-8  px-12 ">
              <div className="col-span-5 w-full max-w-[300px]  xl:justify-center items-center relative mx-auto  ">
                <div className="flex flex-col justify-center text-center items-center ">
                  <div className="text-lg">{name}</div>
                  <div className="">
                    <Image
                      src={url}
                      width={1000}
                      height={1000}
                      alt="Yorum yapan kişi"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-7 justify-center before:w-[1px] xl:before:bg-gray-600 xl:before:absolute xl:before:left-0 xl:before:h-[300px] relative xl:pl-10 ">
                <div className="xl:text-lg text-center md:text-left">
                  {desc}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CihazHomePage;
