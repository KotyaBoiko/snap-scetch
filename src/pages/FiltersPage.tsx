import IsolatedBlock from "@/components/IsolateBlock";
import PointerTitle from "@/components/ui/PointerTitle";
import CategoryFiltersList from "@/features/session/components/CategoryFiltersList";
import DrawSession from "@/features/session/components/DrawSession";
import SetSession from "@/features/session/components/SetSession";
import SelectTimeInterval from "@/features/timer/components/SelectTimeInterval";
import { useState } from "react";

const FiltersPage = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);

  return isSessionActive ? (
    <DrawSession setIsActive={setIsSessionActive} />
  ) : (
    <div className="wrapper pb-10">
      <PointerTitle title="CUSTOMIZE FILTERS" className="mb-10" />
      <IsolatedBlock>
        <CategoryFiltersList />
      </IsolatedBlock>
      <PointerTitle title="CUSTOMIZE TIMER" className="mb-10 mt-8" />
      <IsolatedBlock>
        <SelectTimeInterval />
      </IsolatedBlock>
      <SetSession setIsSessionActive={setIsSessionActive}/>
    </div>
  );
};

export default FiltersPage;
