import React, { ReactElement } from "react";
import { COLORS } from "../data/colors";

type CarouselProps = {
  id: string;
  controlsColor?: COLORS;
  children: ReactElement[];
};

function Carousel({ children, id }: CarouselProps) {
  console.log(children);
  return (
    <div id={id} style={{ height: 100 }} className="carousel slide">
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
      <div className="carousel-inner text-center p-2">
        {children?.map((child, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            {child}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev d-flex align-items-end pb-2"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span>
          ←<span className="d-none d-md-block">Précédent</span>
        </span>
      </button>
      <button
        className="carousel-control-next d-flex align-items-end pb-2"
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
