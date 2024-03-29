import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";
import Section from "../types/Section";

export type TableOfContentsProps = {
  contents: { [key: string]: Section };
  color?: COLORS;
  linkColor?: COLORS;
  linkClassName?: string;
};

function TableOfContents({
  contents,
  linkColor,
  linkClassName,
}: TableOfContentsProps) {
  return (
    <ul className="table-of-contents ps-0">
      {Object.values(contents).map(({ id, title, fontSlab }) => (
        <li>
          <Link
            to={`#${id}`}
            className={`d-flex justify-content-start${
              linkColor ? ` text-${linkColor}` : ""
            }${linkClassName ? ` ${linkClassName}` : ""}${
              fontSlab ? ` font-slab` : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
