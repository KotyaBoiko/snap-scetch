import { COMMON_ROUTES_NAMES } from "@/app/router/commonRoutesNames";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to={COMMON_ROUTES_NAMES.Home}
      className="flex flex-col leading-1 items-center mb-3"
    >
      <span className="font-pixel font-medium text-3xl">SNAP</span>
      <span className="">Scetch</span>
    </Link>
  );
};

export default Logo;
