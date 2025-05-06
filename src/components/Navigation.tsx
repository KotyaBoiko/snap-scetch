import { FC } from "react";
import { Link, useLocation } from "react-router";

type Props = {
  isDarkBg?: boolean;
  data: { name: string; to: string }[];
  className?: string;
};

const Navigation: FC<Props> = ({ isDarkBg, data, className = ''}) => {
  const location = useLocation();
  return (
    <nav className={"flex justify-end gap-3 xs:gap-5 md:gap-8 items-center font-semibold " + className}>
      {data.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.to}
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
