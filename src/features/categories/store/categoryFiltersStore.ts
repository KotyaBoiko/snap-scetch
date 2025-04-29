import { create } from "zustand";
import { ICategoryFilters } from "../types/types";

interface ICategoryFilterStore {
  category: string;
  setCategory: (category: string) => void;
  filters: ICategoryFilters[];
  setFilters: (
    newFilters:
      | ICategoryFilters[]
      | ((filters: ICategoryFilters[]) => ICategoryFilters[])
  ) => void;
  clearFilters: () => void;
}
export const useCategoryFilterStore = create<ICategoryFilterStore>((set) => ({
  category: "",
  setCategory: (category: string) => set(() => ({ category })),
  filters: [],
  setFilters: (newFilters) => set((state) => ({
    filters: typeof newFilters === "function" ? newFilters(state.filters) : newFilters
  })
),
  clearFilters: () => set(() => ({ filters: [] })),
}));
