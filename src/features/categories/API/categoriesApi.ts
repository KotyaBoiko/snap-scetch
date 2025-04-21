import { supabase } from "@/app/supabase/supabaseConfig";
import { ICategory } from "../types/types";

export const getCategories = async () => {
  const response = await supabase.from("categories").select("*");
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.data as ICategory[];
};
