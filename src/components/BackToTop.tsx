import * as React from "react";

type BackToTopProps = {
  isFixed?: boolean;
};

function BackToTop({ isFixed = true }: BackToTopProps) {
  return (
    <button
      type="button"
      id="top-button"
      className={
        isFixed ? "back-to-top-fixed btn rounded-circle" : "back-to-top-relative btn rounded-circle"
      }
    >
      ↑
    </button>
  );
}

export default BackToTop;
