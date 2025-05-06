import { FC, SetStateAction } from "react";
import classes from "./burgerMenu.module.css";
import CrossIcon from '@/app/assets/icons/cross.svg?react' 
import { Link } from "react-router";

type Props = {
  isOpen: boolean;
  setIsOpen: (() => void) | React.Dispatch<SetStateAction<boolean>>;
  data: { name: string; to: string }[];
};

const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen, data }) => {
  return (
    <>
      <div
        onClick={() => setIsOpen((p) => !p)}
        className={classes.icon}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${classes.container} ${
          isOpen ? classes['container-active'] : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`${classes.burger} ${
            isOpen ? classes['burger-active'] : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <CrossIcon className={classes.cross} onClick={() => setIsOpen(false)}/>
          {isOpen ? (
            <div
              className={classes.list}
            >
              {data.map((i) => {
                return (
                  <Link
                    key={i.to + i.name}
                    to={i.to}
                    className={`
              ${classes.link} ${
                      location.pathname == i.to
                        ? classes["link-active"]
                        : ""
                    }
                `}
                onClick={() => setTimeout(() => setIsOpen(false), 400)}
                  >
                    {i.name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
