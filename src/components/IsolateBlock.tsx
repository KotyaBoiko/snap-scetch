import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
}

const IsolatedBlock:FC<Props> = ({children, className = ''}) => {
  return <div className={"p-5 shadow-main rounded-xl " + className}>{children}</div>;
};

export default IsolatedBlock;
