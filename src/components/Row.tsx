import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

export type RowProps = {
  id?: string;
  header?: {
    level: 1 | 2 | 3;
    content: string;
  };
  backgroundColor?: COLORS;
  col?: string;
  colClassName?: string;
  children: ReactElement;
};

function Row({
  id,
  header,
  backgroundColor,
  col = "col-12 col-sm-10 col-md-8 col-lg-6",
  colClassName,
  children,
}: RowProps) {
  return (
    <div
      id={id}
      className={`row ${backgroundColor ? `bg-${backgroundColor}` : ""}`}
    >
      <div className={`${col}${colClassName ? ` ${colClassName}` : ""}`}>
        {header &&
          (header.level === 1 ? (
            <h1>{header.content}</h1>
          ) : header.level === 2 ? (
            <h2>{header.content}</h2>
          ) : (
            <h3>{header.content}</h3>
          ))}
        {children}
      </div>
    </div>
  );
}

export default Row;
