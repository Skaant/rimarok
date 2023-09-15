import * as React from "react";
// import TagsDateHeader from "./TagsDateHeader";
import { Link } from "gatsby";
import { COLORS } from "../data/colors";
import { Link as LinkType } from "nebula-atoms";

function ArticlesList({ links }: { links: LinkType[] }) {
  return (
    <ul className="list-group list-group-flush p-0">
      {links.map(({ label, url }, index) => {
        const linkContent = (
          <>
            {/* <TagsDateHeader
                date={date}
                tags={tags}
                badgesColor={COLORS.SUN}
              /> */}
            {/* description ? (
                <p className="fw-normal mt-3">
                  {description.length > 150
                    ? description.substring(0, 150) + "..."
                    : description}
                </p>
              ) : (
                ""
              ) */}
          </>
        );
        return (
          <li
            key={index}
            className={`list-group-item list-unstyled my-5 bg-light p-5 rounded text-${COLORS.DARK}`}
          >
            <h3>{label}</h3>
            <Link
              to={url}
              className={`btn btn-${COLORS.FLOWER} text-light mt-4`}
            >
              Lire l'article
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
