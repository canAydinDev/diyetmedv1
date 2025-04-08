import React from "react";

const sss = [
  {
    soru: "Çalışma günleriniz ve saatleriniz nelerdir?",
    cevap:
      "Çalışma gün ve saatlerimiz yoğunluğa bağlı olarak değişiklik gösterebilmektedir. Güncel bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
  {
    soru: "Diyetisyenimle ne sıklıkla iletişim kurabilirim?",
    cevap:
      "Mesai saatleri içerisinde dilediğiniz zaman iletişim kurabilirsiniz.",
  },
  {
    soru: "Yüz yüze danışmanlık hizmetinde de WhatsApp üzerinden öğün takibi yapılıyor mu?",
    cevap:
      "Evet, hem yüz yüze hem de online danışmanlık hizmetlerinde porsiyon takibi yapılmaktadır.",
  },
  {
    soru: "Ödeme seçenekleri nelerdir?",
    cevap: "Nakit veya kredi/banka kartı ile ödeme yapabilirsiniz.",
  },
  {
    soru: "İlk görüşmede neler yapılıyor?",
    cevap:
      "İlk görüşmede beslenme alışkanlıklarınız, yaşam tarzınız ve sağlık geçmişiniz değerlendirilerek size özel bir beslenme planı oluşturulur. Ayrıca, vücut analizi yapılarak ölçümleriniz alınır.",
  },
  {
    soru: "Diyet listeleri kişiye özel mi hazırlanıyor?",
    cevap:
      "Evet, diyet listeleri tamamen sizin yaşam tarzınıza, beslenme alışkanlıklarınıza ve sağlık durumunuza uygun şekilde kişiye özel olarak hazırlanır.",
  },
  {
    soru: "Takip görüşmeleri nasıl oluyor?",
    cevap:
      "Takip görüşmeleri sırasında ölçümleriniz alınarak ilerlemeniz değerlendirilir ve beslenme planınız gerektiğinde güncellenir. Ayrıca, danışmanlık süreciniz boyunca motivasyonunuzu korumanız için destek sağlanır.",
  },
  {
    soru: "Danışmanlık süreci ne kadar sürüyor?",
    cevap:
      "Danışmanlık sürecinin süresi tamamen kişiye özel olup, hedeflerinize ve ihtiyaçlarınıza bağlı olarak değişmektedir. Sağlıklı sonuçlar için en az 1-3 ay düzenli takip önerilir.",
  },
  {
    soru: "Hangi yaş gruplarına hizmet veriyorsunuz?",
    cevap:
      "Yetişkin bireylere ve 18 yaş altındaki bireylerde ebeveyn onayı ile beslenme danışmanlığı sağlanmaktadır.",
  },
  {
    soru: "Online ve yüz yüze danışmanlık arasında fark var mı?",
    cevap:
      "Her iki danışmanlık sürecinde de kişiye özel beslenme programı hazırlanır ve porsiyon takibi yapılır. Yüz yüze danışmanlıkta ayrıca vücut analizi ölçümleri yapılırken, online danışmanlıkta bu süreç kişisel geri bildirimlerle takip edilir.",
  },
  {
    soru: "Diyet sürecinde supplement (takviye) kullanımı gerekli mi?",
    cevap:
      "Sağlıklı bir beslenme planı, tüm besin öğelerini doğal yollardan almanıza yardımcı olur. Ancak, bireysel ihtiyaçlarınıza göre eksiklik tespit edilirse, doktor veya diyetisyen önerisiyle takviye kullanılabilir.",
  },
  {
    soru: "Vücut analizi nasıl yapılıyor?",
    cevap:
      "Vücut analizi, profesyonel bir cihaz ile gerçekleştirilerek kilo, yağ-kas oranı, bazal metabolizma hızı ve diğer önemli ölçümler değerlendirilir.",
  },
  {
    soru: "Kilo almak veya sporcu beslenmesi için de danışmanlık alabilir miyim?",
    cevap:
      "Evet, yalnızca kilo kaybı değil, kilo almak, sporcu beslenmesi, hastalıklarda tıbbi beslenme tedavisi ve sağlıklı beslenme alışkanlıkları kazanmak gibi farklı hedefler için de danışmanlık hizmeti verilmektedir.",
  },
  {
    soru: "Ketojenik, aralıklı oruç gibi özel beslenme programları uyguluyor musunuz?",
    cevap:
      "Her bireyin beslenme ihtiyaçları ve yaşam tarzı farklıdır. Size en uygun yöntemin belirlenmesi için bilimsel temelli, sürdürülebilir ve sağlıklı beslenme yaklaşımlarını esas alarak danışmanlık verilmektedir.",
  },
];

const SssPage = () => {
  return (
    <section>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-center mb-10">
          Sıkça Sorulan Sorular
        </h2>
        {sss.map((item, index) => {
          return (
            <div key={index} className=" ml-10 mb-5">
              <h2 className="font-semibold text-xl mt-2"> • {item.soru}</h2>
              <p className="text-lg">{item.cevap}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SssPage;
