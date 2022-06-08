import { Link } from "gatsby";
import * as React from "react";
import Row from "./Row";

type LinksMenuProps = {
  buttons: { link: string; internal?: boolean; label: string }[];
};

function LinksMenu({ buttons }: LinksMenuProps) {
  return (
    <Row>
      <div>
        <>
          {buttons.map((button) => {
            button.internal ? (
              <Link to={button.link} className="btn btn-primary mx-2" role="button">
                {button.label}
              </Link>
            ) : (
              <a href={button.link} className="btn btn-primary mx-2" role="button">
                {button.label}
              </a>
            );
          })}
        </>
      </div>
    </Row>
  );
}

export default LinksMenu;
