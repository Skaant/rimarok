import React, { ReactElement } from "react";
import BadgesList from "./BadgesList";
import { COLORS } from "../data/colors";
import LinksMenu from "./LinksMenu";

type ProjectProps = {
  title: string;
  scope: "full-stack" | "front-end";
  tags?: string[];
  date?: string;
  children: ReactElement;
};

function Project({ title, date, children }: ProjectProps) {
  return (
    <div className="card w-50">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title order-1">{title}</h3>
        <p className="card-text order-0 d-flex justify-content-sm-between align-items-end flex-sm-row flex-column">
          {/* <BadgesList badges={[{ label: "test", color: COLORS.ABYSS }]} /> */}
          <span className="me-2">{date}</span>
        </p>
        {children}
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
