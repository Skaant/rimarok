import { Link } from "gatsby";
import * as React from "react";
import Section from "../types/Section";

type TableOfContentsProps = {
  contents: { [key: string]: Section };
  linkClassName?: string;
};

function TableOfContents({ contents, linkClassName }: TableOfContentsProps) {
  return (
    <ul>
      {Object.values(contents).map(({ id, title }) => (
        <li>
          <Link to={`#${id}`} className={linkClassName}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
