import React, { ReactElement } from "react";
import LinksMenu from "./LinksMenu";
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
    <div className="card">
      <div className="card-body d-flex flex-column text-start">
        <h3 className="card-title order-1">{title}</h3>
        <TagsDateHeader date={date} scope={scope} tags={tags} />
        <div className="order-2">{children}</div>
        {/* <LinksMenu
          links={[
            {
              label: "Test",
              link: "#",
            },
          ]}
        /> */}
      </div>
    </div>
  );
}

export default Project;
