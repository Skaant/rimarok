import React, { ReactElement } from "react";

type QuoteProps = {
  displayHeading: 1 | 2 | 3 | 4 | 5 | 6;
  legend?: {
    source?: string;
    author?: string;
  };
  children: ReactElement;
  className?: string;
};

function Quote({ children, displayHeading, legend, className }: QuoteProps) {
  return (
    <blockquote className={`blockquote${className ? ` ${className}` : ""}`}>
      <div className={`display-${displayHeading} font-slab p-4`}>
        {children}
      </div>
      {legend && (legend.source || legend.author) ? (
        <p className="legend pe-4 pb-3">
          - {legend.source}
          {legend.source && legend.author ? ", " : ""}
          {legend.author}
        </p>
      ) : (
        ""
      )}
    </blockquote>
  );
}

export default Quote;
