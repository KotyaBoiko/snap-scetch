import { supabase } from "@/app/supabase/supabaseConfig";
import { ICategory, ICategoryFilters, IImages } from "../types/types";
import { firstUpperCase } from "@/utils/firstUpperCase";
import { getFiltersJSON } from "../utils/getFiltersJSON";

export const getCategories = async () => {
  const response = await supabase.from("categories").select("name, description, img, id");
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.data as ICategory[];
};

export const getCategoryByName = async (name: string) => {
  const response = await supabase.from('categories').select('*').eq('name', firstUpperCase(name)).single();
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.data as ICategory;
}

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
