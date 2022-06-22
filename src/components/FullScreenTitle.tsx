import * as React from "react";
import Row, { RowProps } from "./Row";

type FullScreenTitleProps = Pick<RowProps, "backgroundColor"> & {
  title: string;
  subtitle: string;
  height?: "100vh" | "60vh";
  titleSize?: "normal" | "big";
};

function FullScreenTitle({
  backgroundColor,
  title,
  subtitle,
  height = "60vh",
  titleSize = "normal",
}: FullScreenTitleProps) {
  return (
    <Row
      id="full-screen-title"
      col="col-12"
      colClassName={`${
        height === "60vh" ? "vh-60" : "vh-100"
      } d-flex flex-column justify-content-center align-items-center text-center p-4`}
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
