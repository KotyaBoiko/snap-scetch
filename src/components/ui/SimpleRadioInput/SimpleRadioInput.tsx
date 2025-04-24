import { FC } from "react";
import classes from "./simpleRadioInput.module.css";

type Props = {
  text: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

const SimpleRadioInput: FC<Props> = ({ text, name, checked, onChange }) => {
  return (
    <label className="flex gap-2 items-center cursor-pointer text-xl">
      <input
        type="radio"
        name={name}
        className={classes.radio}
        checked={checked}
        onChange={onChange}
      />
      {text}
    </label>
  );
};

export default SimpleRadioInput;
