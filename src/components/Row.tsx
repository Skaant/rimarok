import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type RowProps = {
  backgroundColor?: COLORS;
  children: ReactElement;
};

function Row({ backgroundColor, children }: RowProps) {
  return (
    <div className={`row ${backgroundColor ? `bg-${backgroundColor}` : ""}`}>
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">{children}</div>
    </div>
  );
}

export default Row;
