import CrossIcon from "@/app/assets/icons/cross.svg?react";
import ArrowNextPrev from "@/components/ui/ArrowNextPrev";
import Pause from "@/components/ui/Pause";
import TimerWidget from "@/features/timer/components/TimerWidget";
import { useTimerStore } from "@/features/timer/store/timerStore";
import { FC, useState } from "react";
import { useImages } from "../hooks/useImages";
import ResetIcon from "@/app/assets/icons/reset.svg?react";
type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawSession: FC<Props> = ({ setIsActive }) => {
  const { data, isLoading, isSuccess, nextImage, prevImage, activeImage } =
    useImages();

  const isRunning = useTimerStore((state) => state.isRunning);
  const setIsRunning = useTimerStore((state) => state.setIsRunning);
  const reset = useTimerStore(state => state.reset)

  const [isShowMenu, setIsShowMenu] = useState(true);

  if (isLoading) {
    return (
      <div className="h-96 w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="h-96 w-full flex justify-center items-center">
        Something went wrong...
      </div>
    );
  }

  if (data!.length === 0) {
    return (
      <div className="h-96 w-full flex justify-center items-center">
        No images found
      </div>
    );
  }

  const handleSwitchImage = (switcher: () => void) => {
    reset()
    switcher()
  } 

  return (
    <div
      className="bg-main-black h-screen w-screen scrollbar fixed z-50 pointer-events-auto"
      onClick={() => setIsShowMenu((prev) => !prev)}
    >
      <div className="h-full w-auto mx-auto">
        <img
          src={data[activeImage].url}
          key={data[activeImage].id}
          alt={data[activeImage].url}
          className="h-full w-auto mx-auto"
        />
      </div>
      <CrossIcon
        className="fill-main-beige absolute top-5 right-5 h-6 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => setIsActive(false)}
      />
      <div
        className={
          "absolute w-full h-15 bottom-0 flex justify-center items-center gap-5 bg-black/50 text-white transition-transform " +
          (isShowMenu ? "" : "translate-y-full")
        }
        onClick={(e) => e.stopPropagation()}
      >
        <ArrowNextPrev
          direction="left"
          onClick={() => handleSwitchImage(prevImage)}
          className={activeImage === 0 ? "opacity-70" : ""}
        />
        <Pause isActive={isRunning} setIsActive={setIsRunning} />
        <ArrowNextPrev
          direction="right"
          onClick={() => handleSwitchImage(nextImage)}
          className={activeImage === data.length - 1 ? "opacity-70" : ""}
        />
        <ResetIcon className="fill-main-beige h-10 w-10 cursor-pointer hover:opacity-70 transition-opacity" onClick={reset}/>
      </div>
      <TimerWidget />
    </div>
  );
};

export default DrawSession;
