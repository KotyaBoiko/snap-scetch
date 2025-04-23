import { FC } from "react";
import classes from "./simpleRadioInput.module.css";

type Props = {
  text: string;
  name: string;
};

const SimpleRadioInput: FC<Props> = ({ text, name }) => {
  return (
    <label className="flex gap-2 items-center cursor-pointer text-xl">
      <input type="radio" name={name} className={classes.radio} />
      {text}
    </label>
  );
};

export default SimpleRadioInput;
