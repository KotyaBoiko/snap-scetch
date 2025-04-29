import { supabase } from "@/app/supabase/supabaseConfig";
import { ICategoryFilters } from "@/features/categories/types/types";
import { IImages } from "../types/types";
import { getFiltersJSON } from "../utils/getFiltersJSON";

export const getImagesByFilters = async (filters: ICategoryFilters[], category: string) => {
  const response = await supabase
    .from("images")
    .select("*")
    .eq("category", category)
    .or(getFiltersJSON(filters));
  if (response.error) {
    throw new Error(response.error.message);
  } else {
    return response.data as IImages[];
  }
};
