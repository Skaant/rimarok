import * as React from "react";
import { COLORS } from "../data/colors";

type BadgesListProps = {
  badges: { label: string; color: COLORS }[];
  className?: string;
};

function BadgesList({ badges, className }: BadgesListProps) {
  return (
    <span className={className || ""}>
      <>
        {badges.map(({ label, color }, index) => (
          <span
            key={index}
            className={`badge rounded-pill bg-${color} text-${
              [COLORS.FLOWER, COLORS.WHITE].includes(color)
                ? COLORS.BLACK
                : COLORS.WHITE
            } me-2`}
          >
            {label}
          </span>
        ))}
      </>
    </span>
  );
}

export default BadgesList;
