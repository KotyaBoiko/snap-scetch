import GridLayout from "@/components/GridLayout";

import PointerTitle from "@/components/ui/PointerTitle";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { categoriesApi } from "../API";
import CategoryCard from "./CategoryCard";

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
        <PointerTitle title={title} className="mb-5"/>
        <GridLayout cols={4} gap={4}>
          {data.map((category, index) => (
            index < max && ( 
              <CategoryCard category={category} key={category.id}/>
            )
          ))}
        </GridLayout>
      </div>
    </section>
  );
};

export default CategoryList;
