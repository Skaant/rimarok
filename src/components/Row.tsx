import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type RowProps = {
  id?: string;
  backgroundColor?: COLORS;
  children: ReactElement;
};

function Row({ id, backgroundColor, children }: RowProps) {
  return (
    <div
      id={id}
      className={`row ${backgroundColor ? `bg-${backgroundColor}` : ""}`}
    >
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">{children}</div>
    </div>
  );
}

export default Row;
