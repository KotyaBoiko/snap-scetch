import { COMMON_ROUTES_NAMES } from "@/app/router/commonRoutesNames";
import { FC } from "react";
import { Link, useLocation } from "react-router";

const menu = [
  { name: "Home", path: COMMON_ROUTES_NAMES.Home },
  { name: "Training", path: COMMON_ROUTES_NAMES.Training },
  { name: "Gallery", path: COMMON_ROUTES_NAMES.Gallery },
  { name: "About", path: COMMON_ROUTES_NAMES.About },
];

type Props = {
  isDarkBg?: boolean;
};

const Navigation: FC<Props> = ({ isDarkBg }) => {
  const location = useLocation();

  return (
    <nav className="flex justify-end gap-8 items-center font-semibold">
      {menu.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.path}
            className={
              (isDarkBg ? "link-light link" : "link") +
              (location.pathname == `/${item.name.toLowerCase()}`
                ? " link-active"
                : "")
            }
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
