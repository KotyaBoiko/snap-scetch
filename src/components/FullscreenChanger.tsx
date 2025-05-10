import FullscreenExitIcon from "@/app/assets/icons/fullscreen-exit.svg?react";
import FullscreenIcon from "@/app/assets/icons/fullscreen.svg?react";
import React, { FC, useState } from "react";

type Props = {
  elem: React.RefObject<HTMLDivElement | null>;
};

const FullscreenChanger: FC<Props> = ({ elem }) => {
  const [isFullscreen, setIsFullscreen] = useState(Boolean(elem.current));

  const toggleFullscreen = () => {
    if (!elem.current) {
      console.log("Elem not find");
      return;
    }
    if (isFullscreen) {
      setIsFullscreen(false);
      elem.current.requestFullscreen().catch((err) => {
        console.log(err);
      });
    } else {
      setIsFullscreen(true)
      document.exitFullscreen().catch((err) => {
        console.log(err)
      })
    }
  };

  return isFullscreen ? (
    <FullscreenIcon
      onClick={toggleFullscreen}
      className="icon fill-main-beige cursor-pointer hover:opacity-70 transition-opacity"
    />
  ) : (
    <FullscreenExitIcon
      onClick={toggleFullscreen}
      className="icon fill-main-beige cursor-pointer hover:opacity-70 transition-opacity"
    />
  );
};

export default FullscreenChanger;
