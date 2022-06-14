import { Link } from "gatsby";
import * as React from "react";
import Row from "./Row";

type LinksMenuProps = {
  links: { link: string; internal?: boolean; label: string }[];
};

function LinksMenu({ links }: LinksMenuProps) {
  return (
    <Row>
      <div>
        <>
          {links.map((item, index) =>
            item.internal ? (
              <Link to={item.link} key={index} className="btn btn-primary mx-2" role="button">
                {item.label}
              </Link>
            ) : (
              <a href={item.link} key={index} className="btn btn-primary mx-2" role="button">
                {item.label}
              </a>
            )
          )}
        </>
      </div>
    </Row>
  );
}

export default LinksMenu;
