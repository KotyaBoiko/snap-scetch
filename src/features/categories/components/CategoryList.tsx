import BgImgCard from "@/components/Cards/BgImgCard";
import GridLayout from "@/components/GridLayout";

import Pointer from "@/components/ui/Pointer";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { categoriesApi } from "../API";

type Props = {
  max?: number;
  title?: string
};
const CategoryList: FC<Props> = ({ max = 12, title = "CHOOSE CATEGORY" }) => {

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesApi.getCategories(),
  })

  if(isLoading) {
    return <div className="h-96 w-full flex justify-center items-center">Loading...</div>
  }
  if(!isSuccess) {
    return <div className="h-96 w-full flex justify-center items-center">Something went wrong...</div>
  }
  return (
    <section className="py-5">
      <div className="wrapper">
        <div className="flex gap-3 items-center mb-10">
          <Pointer />
          <h1 className="text-7xl font-semibold">{title}</h1>
        </div>
        <GridLayout cols={4} gap={4}>
          {data.map((category, index) => (
            index < max && ( 
            <BgImgCard
              key={category.id}
              title={category.name}
              info={category.description.slice(0, 20) + "..."}
              img={category.img}
            />
            )
          ))}
        </GridLayout>
      </div>
    </section>
  );
};

export default CategoryList;
