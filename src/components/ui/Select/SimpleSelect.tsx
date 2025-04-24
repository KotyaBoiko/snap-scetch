import React, { FC, SetStateAction, useEffect, useRef, useState } from "react";
import classes from "./select.module.css";
import SimpleInput from "../SimpleInput";

type Props = {
  data: string[];
  activeElementIndex?: number;
  onChoose: React.Dispatch<SetStateAction<number>>;
  className?: string;
};

const SimpleSelect: FC<Props> = ({
  data,
  activeElementIndex,
  onChoose,
  className,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isOpenList, setIsOpenList] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenList(false);
      }
    };

    if (isOpenList) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove("modal-active");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenList]);

  return (
    <div
      className={"cursor-pointer relative z-100 w-fit " + className}
      ref={dropdownRef}
    >
      <SimpleInput
        value={data[activeElementIndex || 0]}
        readOnly
        onClick={() => {
          setIsOpenList((p) => !p);
        }}
      />
      <ul
        className={
          "w-full hidden absolute bottom-[-5px] rounded-md bg-main-beige border border-main-black transition-all " +
          (isOpenList ? classes["list-active"] : "")
        }
      >
        {data.map((item, index) => {
          return (
            <li
              className='py-2.5 px-1.5 border-b last:border-none border-main-black transition-colors hover:text-main-black/50'
              key={index}
              onClick={() => {
                setIsOpenList(false);
                onChoose(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SimpleSelect;
