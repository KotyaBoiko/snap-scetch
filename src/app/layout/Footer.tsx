import Logo from "@/components/ui/Logo";
import Navigation from "@/components/Navigation";
import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <footer className="bg-black text-main-beige">
      <div className="wrapper">
        <div className="flex flex-row justify-between items-center text-lg font-semibold h-[100px]">
          <Logo />
          <Navigation isDarkBg={true}/>
          <Socials/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
