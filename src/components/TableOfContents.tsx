import { Link } from "gatsby";
import * as React from "react";
import Section from "../types/Section";

type TableOfContentsProps = {
  contents: { [key: string]: Section };
};

function TableOfContents({ contents }: TableOfContentsProps) {
  return (
    <ul>
      {Object.values(contents).map(({ id, title }) => (
        <li>
          <Link to={`#${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
