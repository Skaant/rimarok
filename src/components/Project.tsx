import React, { ReactElement } from "react";
import BadgesList from "./BadgesList";
import { COLORS } from "../data/colors";

type ProjectProps = {
  title: string;
  scope: "full-stack" | "front-end";
  tags?: string[];
  date?: string;
  children: ReactElement;
  //   menu?: LinkMenuItem
};

function Project({ title, date, children }: ProjectProps) {
  return (
    <div className="card w-50">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title order-1">{title}</h3>
        <p className="card-text order-0">
          <BadgesList badges={[{ label: "Test", color: COLORS.SUN }]} />
          {date}
        </p>
        {children}
        {/* Ajouter LinksMenu ici */}
      </div>
    </div>
  );
}

export default Project;
