import { ICategoryFilters } from "@/features/session/types/types";

export const getFiltersJSON = (filters: ICategoryFilters[]) => {
  if (filters.length === 0) {
    return "filters.cs.{}";
  }
  
  return filters
    .map((f) => {
      return f.options
        .map((o) => {
          return `filters.cs.{"${f.name}": "${o}"}`;
        })
        .join(",");
    })
    .join(",");
};
