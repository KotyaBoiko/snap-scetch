import { COMMON_ROUTES_NAMES } from "@/app/router/commonRoutesNames";
import BgImgCard from "@/components/Cards/BgImgCard";
import { FC } from "react";
import { Link } from "react-router";

type Props = {
  category: {
    id: string;
    name: string;
    description: string;
    img: string;
  };
};

const CategoryCard: FC<Props> = ({ category }) => {
  return (
    <Link
      to={COMMON_ROUTES_NAMES.Category.replace(":categoryName", category.name.toLowerCase())}
    >
      <BgImgCard
        title={category.name}
        info={category.description.slice(0, 20) + "..."}
        img={category.img}
      />
    </Link>
  );
};

export default CategoryCard;
