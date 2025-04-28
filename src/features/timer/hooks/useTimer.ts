import { useEffect, useRef } from "react";
import { useTimerStore } from "../store/timerStore";

export const useTimer = (onFinish: () => void) => {
  const { time, setTime, setIsRunning, isRunning } = useTimerStore((state) => state);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (!isRunning || time <= 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (time <= 0) {
        onFinish();
        setIsRunning(false);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTime(time - 1000);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, time]);

  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time % 60000) / 1000);

  return { minutes, seconds };
};

// import { useEffect, useRef, useState } from "react";

// export const useTimer = (timeInterval: number, onFinish: () => void) => {
//   const [time, setTime] = useState(timeInterval);
//   const [isRunning, setIsRunning] = useState(true);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const start = () => {
//     setIsRunning(true);
//   };
//   const pause = () => {
//     setIsRunning(false);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

//   const reset = () => {
//     setTime(timeInterval);
//   };

//   useEffect(() => {
//     if (!isRunning) return;
//     timerRef.current = setInterval(() => {
//       setTime((p) => {
//         if (p <= 0) {
//           onFinish();
//           pause();
//           return timeInterval;
//         }
//         return p - 1000;
//       });
//     }, 1000);
//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [isRunning]);

//   const minutes = Math.floor(time / 1000 / 60);
//   const seconds = Math.floor((time % 60000) / 1000);

//   return { minutes, seconds, time, start, pause, reset, isRunning };
// };
