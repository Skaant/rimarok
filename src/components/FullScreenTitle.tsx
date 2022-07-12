import * as React from "react";
import Row, { RowProps } from "./Row";

type FullScreenTitleProps = Pick<RowProps, "backgroundColor"> & {
  title: string;
  subtitle: string;
  titleSize?: "normal" | "big";
};

function FullScreenTitle({
  backgroundColor,
  title,
  subtitle,
  titleSize = "normal",
}: FullScreenTitleProps) {
  return (
    <Row
      id="full-screen-title"
      col="col-12"
      colClassName="vh-60 d-flex flex-column justify-content-center align-items-center text-center p-4"
      backgroundColor={backgroundColor}
      paddingY={0}
    >
      <>
        <h1 className={titleSize}>{title}</h1>
        <p className="sub-title">{subtitle}</p>
      </>
    </Row>
  );
}

export default FullScreenTitle;
