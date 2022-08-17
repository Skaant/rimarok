import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";
import Section from "../types/Section";

export type TableOfContentsProps = {
  contents: { [key: string]: Section };
  linkColor?: COLORS;
  linkClassName?: string;
};

function TableOfContents({
  contents,
  linkColor,
  linkClassName,
}: TableOfContentsProps) {
  return (
    <ul>
      {Object.values(contents).map(({ id, title }) => (
        <li>
          <Link
            to={`#${id}`}
            className={`d-flex justify-content-start${
              linkColor ? ` text-${linkColor}` : ""
            }${linkClassName ? ` ${linkClassName}` : ""}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
