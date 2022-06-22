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

function Project({ title, scope, tags, date, children }: ProjectProps) {
  return (
    <div className="card">
      <div className="card-body d-flex flex-column text-start">
        <h3 className="card-title order-1">{title}</h3>
        <p className="card-text order-0 d-flex justify-content-sm-between align-items-end flex-sm-row flex-column text-start">
          {
            <BadgesList
              badges={[scope, ...(tags || [])].map((value, index) => ({
                color: index ? COLORS.MIST : COLORS.FLOWER,
                label: value,
              }))}
            />
          }
          <span className="me-2">{date}</span>
        </p>
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
