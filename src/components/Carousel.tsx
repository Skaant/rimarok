import React, { ReactElement } from "react";

type CarouselProps = {
  id: string;
  childrens: ReactElement[];
};

function Carousel({ childrens, id }: CarouselProps) {
  return (
    <div id={id} className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {childrens.map((children, index) =>
          index === 0 ? (
            <div key={index} className="carousel-item active">
              {children}
            </div>
          ) : (
            <div key={index} className="carousel-item">
              {children}
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
