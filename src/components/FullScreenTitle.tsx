import * as React from "react";
import Row, { RowProps } from "./Row";

type FullScreenTitleProps = Pick<RowProps, "backgroundColor"> & {
  title: string;
  subtitle: string;
  width: "100vh" | "60vh";
  titleSize: "normal" | "big";
};

function FullScreenTitle({
  backgroundColor,
  title,
  subtitle,
  width = "60vh",
  titleSize,
}: FullScreenTitleProps) {
  return (
    <Row
      col="col-12"
      colClassName={`${width} vh-100 d-flex flex-column justify-content-center align-items-center text-center p-4`}
      backgroundColor={backgroundColor}
    >
      <>
        <h1 className={titleSize}>{title}</h1>
        <p className="sub-title">{subtitle}</p>
      </>
    </Row>
  );
}

export default FullScreenTitle;
