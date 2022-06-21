import * as React from "react";
import { COLORS } from "../data/colors";

type BadgesListProps = {
  badges: { label: string; color: COLORS }[];
};

function BadgesList({ badges }: BadgesListProps) {
  return (
    <span>
      <>
        {badges.map(({ label, color }, index) => (
          <span key={index} className={`badge rounded-pill bg-${color} me-2`}>
            {label}
          </span>
        ))}
      </>
    </span>
  );
}

export default BadgesList;
