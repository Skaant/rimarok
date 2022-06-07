import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type RowProps = {
  backgroundColor?: COLORS;
  children: ReactElement;
};

function Row({ backgroundColor, children }: RowProps) {
  return (
    <div className={`row ${backgroundColor ? `bg-${backgroundColor}` : ""}`}>
      {children}
    </div>
  );
}

export default Row;
