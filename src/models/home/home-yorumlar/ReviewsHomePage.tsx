import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

function ReviewsHomePage() {
  const reviews = [
    {
      comment: "Cok iyi bir diyetisyen",
      rating: 5,
      authorImageUrl: "/images/2.png",
      authorName: "Can A.",
    },
    {
      comment: "Cok iyi bir diyetisyen",
      rating: 5,
      authorImageUrl: "/images/2.png",
      authorName: "Can A.",
    },
    {
      comment: "Cok iyi bir diyetisyen",
      rating: 5,
      authorImageUrl: "/images/2.png",
      authorName: "Can A.",
    },
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {reviews.map((review, i) => {
        const { comment, authorImageUrl, authorName } = review;

        return (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-12">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={authorImageUrl}
                      width={100}
                      height={100}
                      alt="Yorum yapan kişi"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-lg">{authorName}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {authorName}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-gray-600 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl mx-auto text-gray-400 md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {comment}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ReviewsHomePage;
