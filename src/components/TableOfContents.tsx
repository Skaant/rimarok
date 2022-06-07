import * as React from "react";
import Header from "../types/Header";

type TableOfContentsProps = {
  contents: Header[];
};

function TableOfContents({ contents }: TableOfContentsProps) {
  return (
    <ul>
      {contents.map(({ id, title }) => (
        <li>
          <a href={id}>{title}</a>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
