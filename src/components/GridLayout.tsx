import { FC, ReactNode } from "react";

type Props = {
  rows?: number;
  cols?: number;
  children: ReactNode;
  gap?: number | string;
};

const colClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const rowClasses = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
};

const gapClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  4: "gap-4",
};

const GridLayout: FC<Props> = ({ children, cols = 1, rows = 1, gap = 1 }) => {
  const colClass = colClasses[cols as keyof typeof colClasses] || "grid-cols-1";
  const rowClass = rowClasses[rows as keyof typeof rowClasses] || "grid-rows-1";
  const gapClass = gapClasses[gap as keyof typeof gapClasses] || "gap-1";

  return (
    <div className={`grid ${colClass} ${rowClass} ${gapClass} gap-y-7`}>{children}</div>
  );
};

export default GridLayout;
