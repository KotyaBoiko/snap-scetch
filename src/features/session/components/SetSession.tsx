import MainButton from "@/components/ui/Buttons/MainButton";
import { FC, useEffect, useState } from "react";
import { useImages } from "../hooks/useImages";

type Props = {
  setIsSessionActive: (isActive: boolean) => void;
};

const SetSession: FC<Props> = ({ setIsSessionActive }) => {
  const { isLoading, data } = useImages();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const startSession = () => {
    if (!isLoading) {
      if(data.length < 1) {
        setIsActive(false);
        setIsSessionActive(false);
      } else if (isActive) {
        setIsSessionActive(true)
        setTimeout(() => {
          const elem = document.getElementById('draw-session')
          if (!elem) {
            console.log('Elem not find')
            return
          }
          elem.requestFullscreen().catch((err) => {
            console.log(err)
          })
        }, 0)
      }
    }
  };

  useEffect(() => {
    startSession();
  }, [isLoading, isActive, data]);

  useEffect(() => {
    const startSessionOnKey = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        e.preventDefault()
        setIsActive(true);
      }
    };
    document.addEventListener("keydown", startSessionOnKey);

    return () => {
      document.removeEventListener("keydown", startSessionOnKey);
    };
  }, []);

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
