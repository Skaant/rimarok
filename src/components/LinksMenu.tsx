import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";
import Row from "./Row";

export type LinksMenuItem = {
  link: string;
  label: string;
  color?: COLORS;
};

type LinksMenuProps = {
  links: LinksMenuItem[];
};

function LinksMenu({ links }: LinksMenuProps) {
  return (
    <div className="mb-4">
      <>
        {links.map(({ link, label, color = COLORS.FLOWER }, index) =>
          link.startsWith("http") ? (
            <a
              href={link}
              key={index}
              className={`btn btn-primary m-2 bg-${color}`}
              role="button"
            >
              {label}
            </a>
          ) : (
            <Link
              to={link}
              key={index}
              className={`btn btn-primary m-2 bg-${color}`}
              role="button"
            >
              {label}
            </Link>
          )
        )}
      </>
    </div>
  );
}

export default LinksMenu;
