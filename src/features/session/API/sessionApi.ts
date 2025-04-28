import { supabase } from "@/app/supabase/supabaseConfig";
import { IImages } from "../types/types";

export const getImagesByFilters = async () => {
  const response = await supabase.from("images").select("*");
  // .eq("category", "c76a3630-bc83-4dcd-b621-713fa954b7df")
  // .or('filters.cs.{"Type": "Fruits"},filters.cs.{"Cut": "Sliced"}')

  if (response.error) {
    throw new Error(response.error.message);
  } else {
    console.log(response);
    return response.data as IImages[];
  }
};
