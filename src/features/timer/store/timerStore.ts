import { create } from "zustand";

interface ITimeStore {
  timerInterval: number;
  setTimeInterval: (time: number) => void;
  time: number;
  setTime: (time: number | ((time: number) => number)) => void;
  isRunning: boolean;
  setIsRunning: (action: boolean | ((action: boolean) => boolean)) => void;
  reset: () => void;
}

export const useTimerStore = create<ITimeStore>((set) => ({
  timerInterval: 30000,
  setTimeInterval: (time) => set(() => ({ timerInterval: time, time })),
  time: 30000,
  setTime: (time) =>
    set((state) => ({
      time: typeof time === "function" ? time(state.time) : time,
    })),
  isRunning: true,
  setIsRunning: (action) =>
    set((state) => {
      if (typeof action === 'function') {
        return  { isRunning: action(state.isRunning)}
      } else {
        if (state.time === 0 && !state.isRunning && action) {
          state.reset();
          return { isRunning: true };
        }
        return { isRunning: action };
      }
    }),
  reset: () => set((state) => ({ time: state.timerInterval, isRunning: true })),
}));
