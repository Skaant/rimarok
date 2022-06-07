import React, { ReactElement } from "react";

type RowProps = {
  children: ReactElement;
};

function Row({ children }: RowProps) {
  return <div className="row">{children}</div>;
}

export default Row;
