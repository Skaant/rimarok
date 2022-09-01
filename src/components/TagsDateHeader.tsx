import * as React from "react";
import BadgesList from "./BadgesList";
import { COLORS } from "../data/colors";

type TagsDateHeaderProps = {
  date?: string;
  scope?: "full-stack" | "front-end";
  tags?: string[];
};

function TagsDateHeader({ date, scope, tags }: TagsDateHeaderProps) {
  return (
    <p className="card-text order-0 d-flex justify-content-sm-between align-items-end flex-sm-row flex-column text-start mb-2">
      {
        <BadgesList
          badges={[scope ? scope : "", ...(tags || [])].map((value, index) => ({
            color: index ? COLORS.MIST : COLORS.FLOWER,
            label: value,
          }))}
        />
      }
      <span className="me-2">{date}</span>
    </p>
  );
}

export default TagsDateHeader;
