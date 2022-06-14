import * as React from "react";
import { COLORS } from "../data/colors";

type BadgesListProps = {
  badges: { label: string; color: COLORS }[];
};

function BadgesList({ badges }: BadgesListProps) {
  return (
    <span className="d-inline">
      <>
        {badges.map((badge, index) => (
          <span key={index} style={{ backgroundColor: badge.color }} className="badge rounded-pill">
            {badge.label}
          </span>
        ))}
      </>
    </span>
  );
}

export default BadgesList;
