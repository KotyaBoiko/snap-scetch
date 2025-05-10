import TimeOverSoundPath from "@/app/assets/sounds/timeover.mp3";
import { useTimer } from "../hooks/useTimer";

const TimerWidget = () => {
  const { minutes, seconds } = useTimer(() => {});

  if (minutes == 0 && seconds == 1) {
    new Audio(TimeOverSoundPath).play();
  }

  return (
    <div className="p-2 border-2 border-main-beige text-main-beige text-4xl absolute top-5 md:top-auto md:bottom-5 left-5 md:left-auto md:right-5 rounded-lg bg-main-black/50">
      {minutes + ":" + (seconds > 9 ? seconds : "0" + seconds)}
    </div>
  );
};

export default TimerWidget;
