import Link from "next/link";

const navLinks = [
  { name: "Hakkımda", href: "/hakkimda" },

  { name: "Cihazlarımız ve Paketler", href: "#cihazlar" },
  { name: "Biliyor musunuz?", href: "#biliyor-musunuz" },
  { name: "Sık Sorulan Sorular", href: "/sss" },
  { name: "Blog", href: "/" },
  { name: "İletişim", href: "#iletisim" },
];
const navLinksSm = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },

  { name: "Sık Sorulan Sorular", href: "/sss" },
];

export const HomeNavbar = () => {
  return (
    <>
      <div className="hidden sm:flex capitalize items-center justify-center gap-3 py-4 bg-[#E8F1E7]  lg:py-4 text-[#4f4540] ">
        {navLinks.map((link, index) => (
          <div key={link.name} className="flex items-center">
            <Link
              href={link.href}
              className=" text-[min(1vw)]   hover:text-[#ac9e93]  transition-colors duration-200 font-light"
            >
              {link.name}
            </Link>
            {index < navLinks.length - 1 && (
              <span className="text-gray-500 mx-2 font-bold md:text-lg">|</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex sm:hidden capitalize items-center justify-center gap-3 py-4 bg-[#E8F1E7]  lg:py-4 text-[#4f4540] ">
        {navLinksSm.map((link, index) => (
          <div key={link.name} className="flex items-center">
            <Link
              href={link.href}
              className=" text-[min(3vw)]   hover:text-[#ac9e93]  transition-colors duration-200 font-light"
            >
              {link.name}
            </Link>
            {index < navLinks.length - 1 && (
              <span className="text-gray-500 mx-2 font-bold md:text-lg">|</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
