import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type QuoteProps = {
  displayHeading: 1 | 2 | 3 | 4 | 5 | 6;
  legend?: {
    source?: string;
    author?: string;
  };
  backgroundColor?: COLORS;
  children: ReactElement;
  className?: string;
};

function Quote({
  children,
  displayHeading,
  legend,
  backgroundColor = COLORS.MIST,
  className,
}: QuoteProps) {
  return (
    <blockquote
      className={`blockquote my-5 bg-${backgroundColor} text-${
        [COLORS.MIST, COLORS.GROUND].includes(backgroundColor)
          ? COLORS.DARK
          : COLORS.LIGHT
      } ${className ? ` ${className}` : ""} rounded-2 position-relative`}
    >
      <img
        src="/glyph.svg"
        className="position-absolute"
        style={{
          zIndex: 3,
          left: "calc(-42px - 8vw)",
          height: "calc(12vh + 12vw)",
          top: "-42px",
        }}
      />
      <div
        className={`display-${displayHeading} font-slab px-4 py-5`}
        style={{ zIndex: 4 }}
      >
        {children}
      </div>
      {legend && (legend.source || legend.author) ? (
        <p className="px-4 pb-3 small">
          - {legend.source}
          {legend.source && legend.author ? "," : ""}
          {legend.author && <i className="ms-1">{legend.author}</i>}
        </p>
      ) : (
        ""
      )}
    </blockquote>
  );
}

export default Quote;
