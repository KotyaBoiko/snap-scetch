import { supabase } from "@/app/supabase/supabaseConfig";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);

  const getImages = async () => {
    const response = await supabase.storage
      .from("drawing-references")
      .list("animals", {
        limit: 100,
        offset: 0,
      });
    if (response.error) {
      console.error("Error fetching images:", response.error.message);
      alert("Failed to load images. Please try again later.");
      return;
    } else {
      setImages(
        response.data.map(
          (item) =>
            `${
              import.meta.env.VITE_SUPABASE_URL
            }/storage/v1/object/public/drawing-references/animals/${item.name}`
        )
      );
    }
  };


  const getImagesByFilters = async () => {
    const response = await supabase
      .from("images")
      .select("*")
      .eq("category", "c76a3630-bc83-4dcd-b621-713fa954b7df")
      .or('filters.cs.{"Type": "Fruits"},filters.cs.{"Cut": "Sliced"}')


    // console.log(response)
    if (response.error) {
      console.error(response.error.code, response.error.details);
      console.log("Failed to load images. Please try again later.");
      return;
    } else {
      console.log(response)
      setImages(response.data.map((i) => `${i.url}`));
    }
  };

  useEffect(() => {
    getImagesByFilters();
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-4">
      {images.map((item, index) => {
        return <img src={item} alt={item} key={index} />;
      })}
    </div>
  );
};

export default GalleryPage;
