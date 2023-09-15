import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";

export type LinksMenuItem = {
  link: string;
  label: string;
  color?: COLORS;
  /** HTML id */
  id?: string;
  blank?: true;
};

export type LinksMenuProps = {
  links: LinksMenuItem[];
  size?: "sm" | "lg";
};

function LinksMenu({ links, size }: LinksMenuProps) {
  return (
    <div className={`my-${size === "sm" ? "1" : "4"}`}>
      <>
        {links.map(({ link, label, color = COLORS.FLOWER, id, blank }, index) =>
          link.startsWith("/") || link.startsWith("#") ? (
            <Link
              to={link}
              key={index}
              className={`btn btn-${color} rounded-pill me-2 my-${
                size === "sm" ? "1" : "2"
              }${size ? ` btn-${size}` : ""}`}
              role="button"
              {...(id ? { id } : {})}
            >
              {label}
            </Link>
          ) : (
            <a
              href={link}
              key={index}
              className={`btn btn-${color} rounded-pill me-2 my-2${
                size ? ` btn-${size}` : ""
              }`}
              role="button"
              target="_blank"
              {...(id ? { id } : {})}
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
