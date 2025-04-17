import BgImgCard from "@/components/Cards/BgImgCard";
import GridLayout from "@/components/GridLayout";

import img from "@/app/assets/images/10.jpg";
import Pointer from "@/components/ui/Pointer";
import { FC } from "react";

const card = {
  title: "Arts",
  info: "The best Art in world",
  img: img,
};

type Props = {
  max?: number;
  title?: string
};
const CategoryList: FC<Props> = ({ max = 5, title = "CHOOSE CATEGORY" }) => {
  return (
    <section className="py-5">
      <div className="wrapper">
        <div className="flex gap-3 items-center mb-10">
          <Pointer />
          <h1 className="text-7xl font-semibold">{title}</h1>
        </div>
        <GridLayout cols={4} gap={4}>
          {[...new Array(max)].map((_, index) => (
            <BgImgCard
              key={index}
              title={card.title}
              info={card.info}
              img={card.img}
            />
          ))}
        </GridLayout>
      </div>
    </section>
  );
};

export default CategoryList;
