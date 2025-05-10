import { useCategoryFilterStore } from "@/features/session/store/categoryFiltersStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { sessionApi } from "../API";

export const useImages = () => {
  const filters = useCategoryFilterStore((state) => state.filters);
  const category = useCategoryFilterStore((state) => state.category);
  const [activeImage, setActiveImage] = useState(0);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["images", filters, category],
    queryFn: () => sessionApi.getImagesByFilters(filters, category),
  });

  const nextImage = () => {
    setActiveImage((prev) => {
      if (isSuccess && prev < data.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevImage = () => {
    setActiveImage((prev) => {
      if (isSuccess && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return {
    data: data ?? [],
    isLoading,
    isSuccess,
    nextImage,
    prevImage,
    activeImage,
  };
};
