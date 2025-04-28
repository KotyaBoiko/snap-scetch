import { create } from "zustand";

interface ITimeStore {
  timerInterval: number;
  setTimeInterval: (time: number) => void;
  time: number;
  setTime: (time: number) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  reset: () => void;
}

export const useTimerStore = create<ITimeStore>((set) => ({
  timerInterval: 9000,
  setTimeInterval: (time) => set(() => ({ timerInterval: time, time })),
  time: 9000,
  setTime: (time) => set(() => ({ time })),
  isRunning: true,
  setIsRunning: (isRunning) => set(() => ({ isRunning })),
  reset: () => set((state) => ({ time: state.timerInterval })),
}));
