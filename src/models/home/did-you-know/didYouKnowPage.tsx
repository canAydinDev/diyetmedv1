import React from "react";

const DidYouKnowPage = () => {
  const didCardList = [
    {
      title: "Sık sık diyet yapmak,",
      description:
        "Vücudundan memnun olmama, depresyon, düşük özsaygı ve aşırı yeme isteğinin artmasıyla ilişkilidir.",
    },
    {
      title: "Sürekli kilo alıp vermek (yo-yo diyeti),",
      description:
        " Vücudunuzu zorlar ve metabolizmanızı yavaşlatır. Bu, özellikle karın bölgesinde yağlanma gibi sağlık sorunlarına yol açabilir. Yo-yo diyeti, kısa vadeli kilo kayıplarına yol açsa da, uzun vadede kilo vermeyi zorlaştırır ve bedensel sağlığınıza zarar verebilir.",
    },
    {
      title: "Yo-Yo diyeti yapan kişiler,",
      description:
        "Genellikle vücutlarını tekrar tekrar diyetle değiştirirken, kilolarını geri alırlar. Bu durum, metabolizmanın hızını yavaşlatır ve kişiyi daha fazla kilo almaya eğilimli hale getirir.",
    },
  ];
  return (
    <section
      id="biliyor-musunuz"
      className="  flex flex-col  justify-start items-center mx-5 md:mx-20 my-5 md:my-12"
    >
      <div className="flex text-center justify-center items-center ">
        <h2 className="text-xl md:text-2xl  p-5 font-bold">
          Bunları biliyor musunuz?
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-10 md:flex-row items-center justify-start text-center mx-5  ">
        {didCardList.map((card) => {
          return (
            <div
              className="col-span-12 md:col-span-4 px-10 space-y-5 "
              key={card.title}
            >
              <h3 className="font-semibold text-lg md:text-xl">{card.title}</h3>
              <p className="font-light text-sm md:text-lg">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DidYouKnowPage;
