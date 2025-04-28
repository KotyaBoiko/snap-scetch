import { useTimer } from "../hooks/useTimer";

const TimerWidget = () => {
  const {minutes, seconds} = useTimer(() => {});

  return (
    <div className="p-2 border-2 border-main-beige text-main-beige text-4xl absolute bottom-5 right-5 rounded-lg bg-main-black/50">
      {minutes + ":" + (seconds > 9 ? seconds : ("0" + seconds))}
    </div>
  );
};

export default TimerWidget;
