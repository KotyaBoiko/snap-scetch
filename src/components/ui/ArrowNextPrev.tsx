import { FC } from "react";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
};

const ArrowNextPrev: FC<Props> = ({ direction, onClick }) => {
  return direction === "left" ? (
    <div className="flex cursor-pointer hover:opacity-70 transition-opacity" onClick={onClick}>
      <div className="border-t-15 border-t-transparent border-l-0 border-r-15 border-r-main-beige border-b-15 border-b-transparent"></div>
      <div className="border-t-15 border-t-transparent border-l-0 border-r-15 border-r-main-beige border-b-15 border-b-transparent"></div>
    </div>
  ) : (
    <div className="flex cursor-pointer hover:opacity-70 transition-opacity" onClick={onClick}>
      <div className="border-t-15 border-t-transparent border-r-0 border-l-15 border-l-main-beige border-b-15 border-b-transparent"></div>
      <div className="border-t-15 border-t-transparent border-r-0 border-l-15 border-l-main-beige border-b-15 border-b-transparent"></div>
    </div>
  );
};

export default ArrowNextPrev;
