import { FC } from "react";

type Props = {
  onClick: (e?: React.MouseEvent) => void;
  active?: boolean;
  children: React.ReactNode;
};

const SelectButton: FC<Props> = ({ onClick, active, children }) => {
  return (
    <button
      onClick={onClick}
      className={
        `px-4 py-2 border rounded-2xl cursor-pointer hover:text-main-beige transition-all ` +
        (active
          ? ` bg-main-red text-main-beige hover:bg-darker-red`
          : "hover:bg-main-red hover:scale-110")
      }
    >
      {children}
    </button>
  );
};

export default SelectButton;
