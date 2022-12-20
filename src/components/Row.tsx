import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";
import BadgesList from "./BadgesList";

export type RowProps = {
  id?: string;
  header?: {
    level: 1 | 2 | 3;
    content: string;
    className?: string;
  };
  tags?: string[];
  backgroundColor?: COLORS;
  paddingY?: 0 | 2 | 3 | 5;
  className?: string;
  col?: string;
  colClassName?: string;
  children: ReactElement;
  /** Display stars SVG under title/subtitle */
  stars?: true;
};

function Row({
  id,
  header,
  tags,
  backgroundColor = COLORS.LIGHT,
  paddingY,
  className,
  col = "col-12 col-sm-10 col-md-8 col-lg-6",
  colClassName,
  children,
  stars,
}: RowProps) {
  return (
    <div
      id={id}
      className={`row bg-${backgroundColor} px-3 ${
        typeof paddingY === "number" ? ` py-${paddingY}` : "py-5"
      }${className ? ` ${className}` : ""}`}
    >
      {stars && (
        <img
          src="/small-stars.svg"
          style={{ width: "124px", marginBottom: "36px" }}
        />
      )}
      <div className={`${col}${colClassName ? ` ${colClassName}` : ""}`}>
        {tags ? (
          <BadgesList
            badges={tags.map((value) => ({
              label: value,
              color:
                backgroundColor &&
                [COLORS.FLOWER, COLORS.SUN, COLORS.LAGOON].includes(
                  backgroundColor
                )
                  ? COLORS.LIGHT
                  : COLORS.FLOWER,
            }))}
            className={`d-block ${
              header &&
              (header.level === 2 ? "my-4" : header.level === 3 ? "my-3" : "")
            }`}
          />
        ) : (
          ""
        )}
        {header &&
          (header.level === 1 ? (
            <h1 className={header.className || ""}>{header.content}</h1>
          ) : header.level === 2 ? (
            <h2
              className={`${header.className ? `${header.className} ` : ""}${
                tags ? "mt-2 mb-4" : "my-4"
              }`}
            >
              {header.content}
            </h2>
          ) : (
            <h3
              className={`${header.className ? `${header.className} ` : ""}${
                tags ? "mt-2 mb-3" : "my-3"
              }`}
            >
              {header.content}
            </h3>
          ))}
        {children}
      </div>
    </div>
  );
}

export default Row;
