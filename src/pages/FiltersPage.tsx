import IsolatedBlock from "@/components/IsolateBlock";
import PointerTitle from "@/components/ui/PointerTitle";
import CategoryFiltersList from "@/features/categories/components/CategoryFiltersList";
import SelectTimeInterval from "@/features/timer/components/SelectTimeInterval";

const FiltersPage = () => {
  return (
    <div className="wrapper pb-10">
      <PointerTitle title="CUSTOMIZE FILTERS" className="mb-10" />
      <CategoryFiltersList />
      <PointerTitle title="CUSTOMIZE TIMER" className="mb-10 mt-8" />
      <IsolatedBlock className="">
        <SelectTimeInterval/>
      </IsolatedBlock>
    </div>
  );
};

export default FiltersPage;
