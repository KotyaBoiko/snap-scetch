import { useCategoryFilterStore } from "@/features/categories/store/categoryFiltersStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { sessionApi } from "../API";

export const useImages = () => {
  const filters = useCategoryFilterStore((state) => state.filters);
  const category = useCategoryFilterStore(state => state.category);
  const [activeImage, setActiveImage] = useState(0);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["images", filters, category],
    queryFn: () => sessionApi.getImagesByFilters(filters, category),
  });

  const nextImage = () => {
    if (isSuccess && activeImage < data.length - 1) {
      setActiveImage((prev) => prev + 1);
    }
  };
  const prevImage = () => {
    if (isSuccess && activeImage > 0) {
      setActiveImage((prev) => prev - 1);
    }
  };

  return { data: data ?? [], isLoading, isSuccess, nextImage, prevImage, activeImage };
};
