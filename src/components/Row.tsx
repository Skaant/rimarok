import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

export type RowProps = {
  id?: string;
  header?: {
    level: 1 | 2 | 3;
    content: string;
  };
  backgroundColor?: COLORS;
  paddingY?: 0 | 2 | 3 | 5;
  className?: string;
  col?: string;
  colClassName?: string;
  children: ReactElement;
};

function Row({
  id,
  header,
  backgroundColor,
  paddingY,
  className,
  col = "col-12 col-sm-10 col-md-8 col-lg-6",
  colClassName,
  children,
}: RowProps) {
  return (
    <div
      id={id}
      className={`row ${backgroundColor ? `bg-${backgroundColor}` : ""} p-3${
        paddingY ? ` py-${paddingY}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      <div className={`${col}${colClassName ? ` ${colClassName}` : ""}`}>
        {header &&
          (header.level === 1 ? (
            <h1>{header.content}</h1>
          ) : header.level === 2 ? (
            <h2 className="my-4">{header.content}</h2>
          ) : (
            <h3 className="my-3">{header.content}</h3>
          ))}
        {children}
      </div>
    </div>
  );
}

export default Row;
