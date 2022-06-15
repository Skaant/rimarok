import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";
import Row from "./Row";

export type LinksMenuItem = {
  link: string;
  internal?: boolean;
  label: string;
  color?: COLORS;
};

type LinksMenuProps = {
  links: LinksMenuItem[];
};

function LinksMenu({ links }: LinksMenuProps) {
  return (
    <div>
      <>
        {links.map(({ link, internal, label, color = COLORS.FLOWER }, index) =>
          internal ? (
            <Link
              to={link}
              key={index}
              className={`btn btn-primary mx-2 bg-${color}`}
              role="button"
            >
              {label}
            </Link>
          ) : (
            <a
              href={link}
              key={index}
              className={`btn btn-primary mx-2 bg-${color}`}
              role="button"
            >
              {label}
            </a>
          )
        )}
      </>
    </div>
  );
}

export default LinksMenu;
