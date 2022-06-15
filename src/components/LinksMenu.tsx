import { Link } from "gatsby";
import * as React from "react";
import Row from "./Row";

export type LinksMenuItem = { link: string; internal?: boolean; label: string };

type LinksMenuProps = {
  links: LinksMenuItem[];
};

function LinksMenu({ links }: LinksMenuProps) {
  return (
    <div>
      <>
        {links.map((item, index) =>
          item.internal ? (
            <Link
              to={item.link}
              key={index}
              className="btn btn-primary mx-2"
              role="button"
            >
              {item.label}
            </Link>
          ) : (
            <a
              href={item.link}
              key={index}
              className="btn btn-primary mx-2"
              role="button"
            >
              {item.label}
            </a>
          )
        )}
      </>
    </div>
  );
}

export default LinksMenu;
