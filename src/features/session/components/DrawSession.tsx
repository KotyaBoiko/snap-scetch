import CrossIcon from "@/app/assets/icons/cross.svg?react";
import ArrowNextPrev from "@/components/ui/ArrowNextPrev";
import Pause from "@/components/ui/Pause";
import TimerWidget from "@/features/timer/components/TimerWidget";
import { useTimerStore } from "@/features/timer/store/timerStore";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { sessionApi } from "../API";
type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawSession: FC<Props> = ({ setIsActive }) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["images"],
    queryFn: () => sessionApi.getImagesByFilters(),
  });
  const setIsRunning = useTimerStore(state => state.setIsRunning)
  const isRunning = useTimerStore(state => state.isRunning)
  const [isPaused, setIsPaused] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(true);

  if (isLoading) {
    return (
      <div className="h-96 w-full flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }
  if (!isSuccess) {
    return (
      <div className="h-96 w-full flex justify-center items-center text-white">
        Something went wrong...
      </div>
    );
  }

  return (
    <div
      className="bg-main-black h-screen w-screen scrollbar fixed z-50 pointer-events-auto"
      onClick={() => setIsShowMenu((prev) => !prev)}
    >
      <div className="h-full w-auto mx-auto">
        {data.map((i) => {
          return (
            <img
              src={i.url}
              key={i.id}
              alt={i.url}
              className="h-full w-auto mx-auto"
            />
          );
        })}
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
        <ArrowNextPrev direction="left" onClick={() => {}} />
        <Pause isActive={isRunning} setIsActive={setIsRunning} />
        <ArrowNextPrev direction="right" onClick={() => {}} />
      </div>
      <TimerWidget/>
    </div>
  );
};

export default DrawSession;
