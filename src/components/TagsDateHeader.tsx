import * as React from "react";
import BadgesList from "./BadgesList";
import { COLORS } from "../data/colors";

type TagsDateHeaderProps = {
  date?: string;
  scope?: "full-stack" | "front-end";
  tags?: string[];
  className?: string;
  badgesColor?: COLORS;
};

function TagsDateHeader({
  date,
  scope,
  tags,
  className,
  badgesColor = COLORS.FLOWER,
}: TagsDateHeaderProps) {
  return (
    <p
      className={`card-text order-0 d-flex justify-content-sm-between align-items-end flex-sm-row flex-column text-start mb-2${
        className ? ` ${className}` : ""
      }`}
    >
      {
        <BadgesList
          badges={[...(scope ? [scope] : []), ...(tags || [])].map(
            (value, index) => ({
              color: index || !scope ? badgesColor : COLORS.ABYSS,
              label: value,
            })
          )}
        />
      }
      <span className="ms-3">{date}</span>
    </p>
  );
}

export default TagsDateHeader;
