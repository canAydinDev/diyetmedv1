import Image from "next/image";
import Link from "next/link";
import React from "react";

function LogoComponent() {
  return (
    <div className="text-center flex items-center justify-center ">
      <Link href="/">
        <Image
          src="/images/2.png"
          width={300}
          height={300}
          alt="diyetmed-logo"
        />
      </Link>
    </div>
  );
}

export default LogoComponent;
