import * as React from "react";
import { COLORS } from "../data/colors";

type BackToTopProps = {
  isFixed?: boolean;
  backgroundColor?: COLORS;
  textColor?: COLORS;
};

function BackToTop({ isFixed = true, backgroundColor, textColor }: BackToTopProps) {
  return (
    <button
      type="button"
      id="top-button"
      className={`btn rounded-circle d-none border-0 ${
        isFixed ? "position-fixed" : "position-relative"
      } bottom-0 end-0 m-5 px-3 py-2 bg-${backgroundColor} text-${textColor}`}
    >
      ↑
    </button>
  );
}

export default BackToTop;
