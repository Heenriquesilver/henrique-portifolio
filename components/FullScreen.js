import React from "react";
import { GoScreenFull } from "react-icons/go";
import { BiExitFullscreen } from "react-icons/bi";
import { FullscreenIcon, Minimize } from "lucide-react";
import { useState } from "react";

const FullScreen = () => {
  const [isFullScreen, setFullScreen] = useState(false);

  const toggleScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setFullScreen(true);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setFullScreen(false);
      });
    }
  };

  return (
    <div className="cursor-pointer " onClick={toggleScreen}>
      {isFullScreen ? <BiExitFullscreen /> : <FullscreenIcon />}
    </div>
  );
};

export default FullScreen;
