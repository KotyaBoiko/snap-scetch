import { FC } from "react";

type Props = {
  title: string;
  info: string;
  img: string;
};

const BgImgCard: FC<Props> = ({ title, info, img }) => {
  return (
    <div className="relative aspect-[4/5] h-full p-6 rounded-2xl overflow-hidden flex flex-col justify-between text-main-beige transition-all hover:translate-y-[-20px] will-change-transform cursor-pointer group">
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-110 overflow-hidden"
      />
      <div className="absolute inset-0 bg-black/40 z-10 group-hover:opacity-0 duration-300 transition-opacity" />
      <div className="relative z-20 flex flex-col justify-between h-full">
        <h5 className="font-bold text-3xl mb-2 font-pixel">{title}</h5>
        <p className="text-2xl mt-auto">{info}</p>
      </div>
    </div>
  );
};

export default BgImgCard;
