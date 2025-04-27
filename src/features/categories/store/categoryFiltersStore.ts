import { create } from "zustand";
import { ICategoryFilters } from "../types/types";

interface ICategoryFilterStore {
  filters: ICategoryFilters[],
  setFilters: (filters: ICategoryFilters[]) => void;
  clearFilters: () => void;
}
export const useCategoryFilterStore = create<ICategoryFilterStore>((set) => ({
  filters: [],
  setFilters: (filters) => set(() => ({ filters })),
  clearFilters: () => set(() => ({ filters: [] })),
}))