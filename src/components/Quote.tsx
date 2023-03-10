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
      className={`blockquote my-5 me-5 bg-${backgroundColor} text-${
        [COLORS.LIGHT, COLORS.MIST, COLORS.GROUND].includes(backgroundColor)
          ? COLORS.DARK
          : COLORS.LIGHT
      } ${className ? ` ${className}` : ""} rounded-2 position-relative`}
    >
      <img src="/glyph.svg" className="position-absolute" style={{}} />
      <div className={`display-${displayHeading} font-slab px-4 pt-5 pb-4`}>
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
