import * as React from "react";
import Row, { RowProps } from "./Row";

type FullScreenTitleProps = Pick<RowProps, "backgroundColor"> & {
  title: string;
  subtitle: string;
};

function FullScreenTitle({
  backgroundColor,
  title,
  subtitle,
}: FullScreenTitleProps) {
  return (
    <Row
      col="col-12"
      colClassName="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
      backgroundColor={backgroundColor}
    >
      <>
        <h1 className="main-title">{title}</h1>
        <p className="sub-title">{subtitle}</p>
      </>
    </Row>
  );
}

export default FullScreenTitle;
