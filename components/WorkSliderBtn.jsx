"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtn = ({ containerStyles, btnStyles, inconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={inconsStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={inconsStyles}
          onClick={() => {
            swiper.slideNext();
          }}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
