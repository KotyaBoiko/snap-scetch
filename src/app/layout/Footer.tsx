import Navigation from "@/components/Navigation";
import Logo from "@/components/ui/Logo";
import { menu } from "./menu";

const Footer = () => {
  return (
    <footer className="bg-black text-main-beige relative z-40">
      <div className="wrapper">
        <div className="flex flex-col-reverse py-5 gap-5 md:py-0 md:flex-row justify-between items-center text-lg font-semibold min-h-[100px]">
          <Logo />
          <Navigation isDarkBg={true} data={menu}/>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
