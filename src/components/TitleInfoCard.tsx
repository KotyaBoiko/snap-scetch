import { FC } from "react";

type Props = {
  title: string;
  info: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TitleInfoCard: FC<Props> = ({ title, info, Icon }) => {
  return (
    <div className="flex flex-col gap-3 w-96 h-full">
      {Icon ? <Icon  className="w-15 h-15"/> : null}
      <h5 className="font-bold text-2xl ">{title}</h5>
      <p className="text-xl mb-auto">{info}</p>
    </div>
  );
};

export default TitleInfoCard;
