import IsolatedBlock from "@/components/IsolateBlock";
import MainButton from "@/components/ui/Buttons/MainButton";
import PointerTitle from "@/components/ui/PointerTitle";
import CategoryFiltersList from "@/features/categories/components/CategoryFiltersList";
import DrawSession from "@/features/session/components/DrawSession";
import SelectTimeInterval from "@/features/timer/components/SelectTimeInterval";
import { useState } from "react";

const FiltersPage = () => {
  const [isSessionActive, setIsSessionActive] = useState(true);

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
      <MainButton
        content="Start Session"
        className="font-bold text-2xl block mx-auto mt-6"
        action={() => setIsSessionActive(true)}
      />
    </div>
  );
};

export default FiltersPage;
