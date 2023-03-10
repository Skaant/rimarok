import React, { ReactElement } from "react";
import TagsDateHeader from "./TagsDateHeader";

type ProjectProps = {
  title: string;
  scope: "full-stack" | "front-end";
  tags?: string[];
  date?: string;
  children: ReactElement;
};

function Project({ title, scope, tags, date, children }: ProjectProps) {
  return (
    <div className="card project mx-2">
      <img src="/mist.svg" className="w-50 mt-5 ms-5 mb-5 position-absolute" />
      <div className="card-body d-flex flex-column text-start">
        <h3 className="card-title order-1 mb-4">{title}</h3>
        <TagsDateHeader
          date={date}
          scope={scope}
          tags={tags}
          className="mt-2 mb-4"
        />
        <div className="order-2">{children}</div>
      </div>
    </div>
  );
}

export default Project;
