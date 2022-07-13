import * as React from "react";
import Row, { RowProps } from "./Row";
import TableOfContents from "./TableOfContents";
import { TableOfContentsProps } from "./TableOfContents";

type PageHeaderProps = Pick<RowProps, "backgroundColor"> & {
  title: string;
  subtitle: string;
  titleSize?: "normal" | "big";
} & TableOfContentsProps;

function PageHeader({
  backgroundColor,
  title,
  subtitle,
  titleSize = "normal",
  contents,
}: PageHeaderProps) {
  return (
    <Row
      id="full-screen-title"
      col="col-12"
      colClassName="min-vh-60 d-flex flex-column justify-content-center align-items-center text-center p-4"
      backgroundColor={backgroundColor}
      paddingY={0}
    >
      <>
        <h1 className={titleSize}>{title}</h1>
        <p className="sub-title">{subtitle}</p>
        <div
          className="d-flex justify-content-start col-12 col-sm-10 col-md-8 col-lg-6"
          style={{ marginTop: "8vh" }}
        >
          <TableOfContents contents={contents} />
        </div>
      </>
    </Row>
  );
}

export default PageHeader;
