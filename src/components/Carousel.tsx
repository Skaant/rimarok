import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type CarouselProps = {
  id: string;
  textColor?: COLORS;
  controlsColor?: COLORS;
  children: ReactElement[];
};

function Carousel({
  children,
  id,
  textColor = COLORS.BLACK,
  controlsColor = COLORS.BLACK,
}: CarouselProps) {
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-indicators">
        {children?.map((child, index) => (
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className={`carousel-inner text-center py-4 text-${textColor}`}>
        {children?.map((child, index) => (
          <div
            key={index}
            className={`carousel-item pt-4 pb-5 ${index === 0 ? "active" : ""}`}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className={`carousel-control-prev d-flex align-items-start pt-3 text-${controlsColor} h-50`}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span>
          ←<span className="d-none d-md-block">Précédent</span>
        </span>
      </button>
      <button
        className={`carousel-control-next d-flex align-items-start pt-3 text-${controlsColor} h-50`}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="visually-hidden"> </span>
        <span>
          →<span className="d-none d-md-block">Suivant</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
