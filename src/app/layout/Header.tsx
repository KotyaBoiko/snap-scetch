import Logo from "@/components/ui/Logo";
import Navigation from "@/components/Navigation";
import MainButton from "@/components/ui/Buttons/MainButton";
import { COMMON_ROUTES_NAMES } from "../router/commonRoutesNames";


const Header = () => {
  return (
    <header className="relative z-50">
      <div className="wrapper">
        <div className="flex flex-row justify-between items-center text-lg font-semibold h-[100px]">
          <Logo />
          <Navigation />
          <MainButton content="Get Started" to={COMMON_ROUTES_NAMES.Training}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
