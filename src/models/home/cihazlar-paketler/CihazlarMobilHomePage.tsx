import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CihazMobilHomePage() {
  const cihazlar = [
    {
      url: "/images/cihazlar-3.png",
      name: "Vacu Active",
      desc: `Vacuactiv, vakum, kızılötesi, ozon terapisi ve lenf drenajı
      teknolojilerini birleştirerek maksimum kalori yakımını destekleyen
      yenilikçi bir zayıflama cihazıdır.`,
    },
    {
      url: "/images/cihazlar-2.png",
      name: "Rollshape",
      desc: `Rollshape, Uzakdoğu masaj tekniklerini modern teknolojiyle buluşturan 
      bir masaj cihazıdır. IR teknolojisi sayesinde cildi sıkılaştırır ve 
      yağ yakımını destekler.`,
    },
    {
      url: "/images/cihazlar-1.png",
      name: "Perfecto",
      desc: `Tartı Perfecto, Japon teknolojisiyle vücut kompozisyonunuzu detaylı 
      şekilde analiz eder. Yağ, kas ve sıvı oranlarını hassasiyetle ölçer.`,
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
          <SwiperSlide key={i} className="mt-5 md:mt-20 h-[350px] ">
            <div className="grid grid-cols-10 items-center  md:gap-x-8 px-4  md:px-12 ">
              <div className="col-span-4 w-full max-w-[300px]  xl:justify-center items-center relative mx-auto  ">
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

              <div className="col-span-6 justify-center before:w-[1px] xl:before:bg-gray-600 xl:before:absolute xl:before:left-0 xl:before:h-[300px] relative xl:pl-10 ">
                <div className="text-sm xl:text-lg text-center md:text-left">
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

export default CihazMobilHomePage;
