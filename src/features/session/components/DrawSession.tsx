import CrossIcon from "@/app/assets/icons/cross.svg?react";
import ArrowNextPrev from "@/components/ui/ArrowNextPrev";
import Pause from "@/components/ui/Pause";
import TimerWidget from "@/features/timer/components/TimerWidget";
import { useTimerStore } from "@/features/timer/store/timerStore";
import { FC, useEffect, useRef, useState } from "react";
import { useImages } from "../hooks/useImages";
import ResetIcon from "@/app/assets/icons/reset.svg?react";
import { sessionControlKey } from "../constants/sessionControlKey";
import FullscreenChanger from "@/components/FullscreenChanger";
type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawSession: FC<Props> = ({ setIsActive }) => {
  const { data, nextImage, prevImage, activeImage } = useImages();
  const isRunning = useTimerStore((state) => state.isRunning);
  const setIsRunning = useTimerStore((state) => state.setIsRunning);
  const reset = useTimerStore((state) => state.reset);

  const [isShowMenu, setIsShowMenu] = useState(true);

  const drawSessionContainer = useRef<HTMLDivElement>(null);

  const endSession = () => {
    const answer = confirm("End session?")
    if (answer) {
      setIsActive(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case sessionControlKey.next:
          handleSwitchImage(nextImage);
          break;
        case sessionControlKey.prev:
          handleSwitchImage(prevImage);
          break;
        case sessionControlKey.togglePause:
          setIsRunning((p) => !p);
          break;
        case sessionControlKey.reset:
          reset();
          break;
        case sessionControlKey.exit: {
          endSession();
          break;
        }
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    //mobile fullscreen
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    //block scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  const handleSwitchImage = (switcher: () => void) => {
    reset();
    switcher();
  };

  return (
    <div
      ref={drawSessionContainer}
      id="draw-session"
      className="bg-main-black h-[calc(var(--vh,1vh)_*100)] w-screen fixed z-50 pointer-events-auto"
      onClick={() => setIsShowMenu((prev) => !prev)}
    >
      <div className="h-full w-auto mx-auto">
        <img
          src={data[activeImage].url}
          key={data[activeImage].id}
          alt={data[activeImage].url}
          className="h-full w-auto object-contain mx-auto"
        />
      </div>
      <CrossIcon
        className="fill-main-beige absolute top-5 right-5 h-6 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={endSession}
      />
      <div
        className={
          "absolute w-full h-15 bottom-0 flex justify-center items-center gap-5 bg-black/50 text-white transition-transform " +
          (isShowMenu ? "" : "translate-y-full")
        }
        onClick={(e) => e.stopPropagation()}
      >
        <ResetIcon
          className="fill-main-beige h-10 w-10 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={reset}
        />
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
        <FullscreenChanger elem={drawSessionContainer} />
      </div>
      <TimerWidget />
    </div>
  );
};

export default DrawSession;
