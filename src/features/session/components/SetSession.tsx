import IsolatedBlock from "@/components/IsolateBlock";
import PointerTitle from "@/components/ui/PointerTitle";
import CategoryFiltersList from "@/features/categories/components/CategoryFiltersList";
import SelectTimeInterval from "@/features/timer/components/SelectTimeInterval";

const SetSession = () => {
  return (
    <div className="wrapper pb-10">
      <PointerTitle title="CUSTOMIZE FILTERS" className="mb-10" />
      <IsolatedBlock>
        <CategoryFiltersList />
      </IsolatedBlock>
      <PointerTitle title="CUSTOMIZE TIMER" className="mb-10 mt-8" />
      <IsolatedBlock>
        <SelectTimeInterval />
      </IsolatedBlock>
    </div>
  );
};

export default SetSession;
