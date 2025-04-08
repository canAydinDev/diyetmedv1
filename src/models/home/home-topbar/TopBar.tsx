import Link from "next/link";
import LinksComponent from "./LinksComponent";
import LogoComponent from "./LogoComponent";
import { PhoneNumber } from "./PhoneNumber";
import { FaWhatsapp } from "react-icons/fa";

function TopBar() {
  return (
    <>
      <div className="flex flex-row items-center justify-center md:mx-10 md:my-1 mt-1 ">
        <div className="hidden md:flex flex-2 ">
          <LinksComponent />
        </div>
        <div className="flex md:flex-6 items-center md:justify-center justify-center w-full text-center">
          <LogoComponent />
        </div>
        <div className="hidden md:flex flex-2  ">
          <PhoneNumber />
        </div>
      </div>
      <div className="block md:hidden">
        <header className="fixed bottom-0 left-0 top-auto right-auto z-50 ">
          <nav className="max-w-5xl mx-auto p-4">
            <Link href="https://wa.me/message/UUFAYY7J3GWUJ1" target="_blank">
              <FaWhatsapp size={46} style={{ color: "#77a72b" }} />
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export default TopBar;
