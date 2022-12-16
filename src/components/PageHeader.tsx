import * as React from "react";
import { COLORS } from "../data/colors";
import LinksMenu, { LinksMenuProps } from "./LinksMenu";
import Row, { RowProps } from "./Row";
import TableOfContents from "./TableOfContents";
import { TableOfContentsProps } from "./TableOfContents";

type PageHeaderProps = Pick<RowProps, "backgroundColor" | "paddingY"> & {
  title: string;
  subtitle?: string;
  titleSize?: "normal" | "big";
  linksMenu?: LinksMenuProps;
  tableOfContents?: TableOfContentsProps;
};

function PageHeader({
  backgroundColor,
  title,
  subtitle,
  titleSize = "normal",
  linksMenu,
  tableOfContents,
  paddingY,
}: PageHeaderProps) {
  return (
    <Row
      id="full-screen-title"
      col="col-12 col-lg-10"
      colClassName="d-flex flex-column justify-content-center align-items-center p-4"
      backgroundColor={backgroundColor}
      paddingY={paddingY || 0}
    >
      <>
        <h1 className={`${titleSize} text-center`}>{title}</h1>
        {subtitle && (
          <h2 className="subtitle text-center font-rubik my-2">{subtitle}</h2>
        )}
        {linksMenu && <LinksMenu size="lg" {...linksMenu} />}
        {backgroundColor !== COLORS.LIGHT ? <img src="/small-stars.svg" /> : ""}
        {tableOfContents && (
          <div
            className="d-flex justify-content-start col-12 col-sm-10 col-md-8 col-lg-6"
            style={{ marginTop: "8vh" }}
          >
            <TableOfContents {...tableOfContents} />
          </div>
        )}
      </>
    </Row>
  );
}

export default PageHeader;
