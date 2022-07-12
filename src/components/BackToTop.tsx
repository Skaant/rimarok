import * as React from "react";
import { COLORS } from "../data/colors";

type BackToTopProps = {
  isFixed?: boolean;
  backgroundColor?: COLORS;
  textColor?: COLORS;
};

function BackToTop({
  isFixed = true,
  backgroundColor = COLORS.LAGOON,
  textColor = COLORS.WHITE,
}: BackToTopProps) {
  return (
    <button
      type="button"
      className={`top-button btn rounded-circle border-0 ${
        isFixed
          ? "position-fixed d-none m-5 bottom-0 end-0"
          : "position-relative d-block"
      }  px-3 py-2 bg-${backgroundColor} text-${textColor}`}
    >
      ↑
    </button>
  );
}

export default BackToTop;
