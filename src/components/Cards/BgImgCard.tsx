import { FC } from "react";

type Props = {
  title: string;
  info: string;
  img: string;
};

const BgImgCard: FC<Props> = ({ title, info, img }) => {
  return (
    <div className="relative aspect-[3/4] h-full p-6 rounded-2xl overflow-hidden flex flex-col justify-between text-main-beige transition-transform hover:translate-y-[-20px] cursor-pointer group">
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-110 overflow-hidden will-change-transform"
      />
      <div className="absolute inset-0 bg-black/40 z-10 group-hover:opacity-0 duration-300 transition-opacity" />
      <div className="relative z-20 flex flex-col justify-between h-full">
        <h5 className="font-semibold text-4xl mb-2 font-pixel text-wrap wrap-break-word">{title}</h5>
        <p className="text-2xl mt-auto text-nowrap overflow-hidden text-ellipsis">{info}</p>
      </div>
    </div>
  );
};

export default BgImgCard;
