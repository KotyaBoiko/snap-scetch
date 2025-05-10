import { FC } from "react";

type Props = {
  title: string;
  info: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TitleInfoCard: FC<Props> = ({ title, info, Icon }) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[350px] h-full break-words">
      {Icon ? <Icon  className="w-15 h-15 fill-main-gray"/> : null}
      <h5 className="font-bold text-2xl ">{title}</h5>
      <p className="text-xl text-wrap mb-auto">{info}</p>
    </div>
  );
};

export default TitleInfoCard;
