import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div>
        <Image
          src="/images/cihazlar/2.png"
          alt="paket icerigi"
          height={1000}
          width={1000}
        />
      </div>
      <div>
        <Image
          src="/images/cihazlar/1.png"
          alt="bilgilendirme"
          height={1000}
          width={1000}
        />
      </div>
      <div>
        <Image
          src="/images/cihazlar/3.png"
          alt="paket kullanim sureleri"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default page;
