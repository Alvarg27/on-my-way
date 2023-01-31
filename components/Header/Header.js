import useLanguage from "@/hooks/useLanguage";
import usePageOffset from "@/hooks/usePageOffset";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import React from "react";
import Button from "../commons/Button";
import LanguageSelector from "../commons/LanguageSelector";
import LogoSvg from "../commons/LogoSvg";
import MenuIcon from "../commons/MenuIcon";
import TopMessage from "../commons/TopMessage";

const text = {
  home: [
    { language: "es", content: "Inicio" },
    { language: "en", content: "Home" },
  ],
  about: [
    { language: "es", content: "Nosotros" },
    { language: "en", content: "About us" },
  ],
  services: [
    { language: "es", content: "Servicios" },
    { language: "en", content: "Services" },
  ],
  clients: [
    { language: "es", content: "Clientes" },
    { language: "en", content: "Clients" },
  ],
  contact: [
    { language: "es", content: "Ponte en contacto" },
    { language: "en", content: "Get in touch" },
  ],
};

const Header = () => {
  const { translate } = useLanguage();
  const { width } = useWindowDimensions();
  const { offsetY } = usePageOffset();
  return (
    <div className="fixed w-full top-0 z-[50]">
      <TopMessage className="sticky top-0" />
      <div
        className={`w-full h-[70px]  z-50 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.2)] `}
      >
        <div
          style={{ height: offsetY > 35 ? 70 : 0, transition: "0.2s" }}
          className={`absolute top-0 w-full ${
            offsetY > 35 ? "bg-white" : "bg-transparent"
          }`}
        />
        <div className="flex justify-between max-w-[1200px] w-[95%] h-full items-center mx-auto relative">
          <LogoSvg />
          {width > 1024 && (
            <div className="flex items-center text-white">
              <nav className="flex h-full items-center mr-4">
                <p className="mx-2 font-medium">{translate(text.home)}</p>
                <p className="mx-2 font-medium">{translate(text.about)}</p>
                <p className="mx-2 font-medium">{translate(text.services)}</p>
                <p className="mx-2 font-medium">{translate(text.clients)}</p>
              </nav>

              <Button className="bg-[#6bcbd7] !h-[45px]">
                {translate(text.contact)}
              </Button>
              <LanguageSelector />
            </div>
          )}
          {width <= 1024 && (
            <div className="flex items-center text-white">
              <LanguageSelector className="mr-6 !h-[35px]" />
              <MenuIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
