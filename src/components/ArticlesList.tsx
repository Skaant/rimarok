import * as React from "react";
import { ARTICLES_DATA } from "../data/articles";
import TagsDateHeader from "./TagsDateHeader";
import { Link } from "gatsby";
import { COLORS } from "../data/colors";

function ArticlesList() {
  return (
    <ul className="list-group list-group-flush p-0">
      {ARTICLES_DATA.slice()
        .sort(function (article1, article2) {
          return article2.date
            .split("/")
            .reverse()
            .join("")
            .localeCompare(article1.date.split("/").reverse().join(""));
        })
        .map(({ id, title, description, date, tags, disabled }, index) => {
          const linkContent = (
            <>
              <TagsDateHeader
                date={date}
                tags={tags}
                badgesColor={COLORS.SUN}
              />
              <h3>{title}</h3>
              {description ? (
                <p className="fw-normal mt-3">
                  {description.length > 150
                    ? description.substring(0, 150) + "..."
                    : description}
                </p>
              ) : (
                ""
              )}
            </>
          );
          return (
            <li
              key={index}
              className={`list-group-item list-unstyled my-5 bg-light p-5 rounded text-${
                disabled ? COLORS.MIST : COLORS.DARK
              }`}
            >
              {disabled ? (
                linkContent
              ) : (
                <Link to={id} className={`text-${COLORS.DARK}`}>
                  {linkContent}
                </Link>
              )}
              {!disabled && (
                <Link
                  to={id}
                  className={`btn btn-${COLORS.FLOWER} text-light mt-4`}
                >
                  Lire l'article
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default ArticlesList;
