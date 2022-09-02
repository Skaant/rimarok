import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";

export type LinksMenuItem = {
  link: string;
  label: string;
  color?: COLORS;
};

export type LinksMenuProps = {
  links: LinksMenuItem[];
  size?: "lg";
};

function LinksMenu({ links, size }: LinksMenuProps) {
  return (
    <div className={`links-menu my-4`}>
      <>
        {links.map(({ link, label, color = COLORS.FLOWER }, index) =>
          link.startsWith("/") ? (
            <Link
              to={link}
              key={index}
              className={`btn btn-${color} m-2${size ? ` btn-${size}` : ""}`}
              role="button"
            >
              {label}
            </Link>
          ) : (
            <a
              href={link}
              key={index}
              className={`btn btn-${color} m-2${size ? ` btn-${size}` : ""}`}
              role="button"
              target="_blank"
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
