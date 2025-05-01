import MainButton from "@/components/ui/Buttons/MainButton";
import { FC, useEffect, useState } from "react";
import { useImages } from "../hooks/useImages";

type Props = {
  setIsSessionActive: (isActive: boolean) => void;
};

const SetSession: FC<Props> = ({ setIsSessionActive }) => {
  const { isLoading, data } = useImages();
  const [isActive, setIsActive] = useState(false);
  const handleClick = async () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (!isLoading && data.length < 1) {
      setIsActive(false);
      setIsSessionActive(false);
    }
    if (!isLoading && isActive && data.length > 0) {
      setIsSessionActive(true);
    }
  }, [isLoading, isActive]);

  return (
    <>
      <MainButton
        content={isLoading && isActive ? "Loading..." : "Start Session"}
        className="font-bold text-2xl block mx-auto mt-6"
        action={handleClick}
      />
      {data.length < 1 && !isLoading && (
        <div className="text-center text-small mt-2 text-main-black">
          Not find Images
        </div>
      )}
    </>
  );
};

export default SetSession;
