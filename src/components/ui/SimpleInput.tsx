import React, { FC } from "react";

type Props = {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  min?: number;
  max?: number;
};

const SimpleInput: FC<Props> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
  readOnly = false,
  onClick,
  autofocus = false,
  min,
  max,
}) => {
  return (
    <input
      min={min}
      max={max}
      autoFocus={autofocus}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={"border-2 border-main-black/50 rounded-md p-2 " + className}
      onClick={onClick}
    />
  );
};

export default SimpleInput;
