import * as React from "react";
import { COLORS } from "../data/colors";

type BackToTopProps = {
  isFixed?: boolean;
  backgroundColor?: COLORS;
  textColor?: COLORS;
};

function BackToTop({
  isFixed = true,
  backgroundColor = COLORS.DATA,
  textColor = COLORS.LIGHT,
}: BackToTopProps) {
  return (
    <button
      type="button"
      className={`top-button btn rounded-circle border-0 bg-${backgroundColor} text-${textColor}`}
    >
      ↑
    </button>
  );
}

export default BackToTop;
