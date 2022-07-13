import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";
import BadgesList from "./BadgesList";

export type RowProps = {
  id?: string;
  header?: {
    level: 1 | 2 | 3;
    content: string;
  };
  tags?: string[];
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
  tags,
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
        {tags ? (
          <BadgesList
            badges={
              [
                // { label: tags[0], color: COLORS.FLOWER },
                // { label: tags[1], color: COLORS.MIST },
              ]
            }
          />
        ) : (
          ""
        )}
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
