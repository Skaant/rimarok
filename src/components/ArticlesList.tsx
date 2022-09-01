import * as React from "react";
import { ARTICLES_DATA } from "../data/articles";
import TagsDateHeader from "./TagsDateHeader";
import { Link } from "gatsby";

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
              <TagsDateHeader date={date} tags={tags} />
              <h3>{title}</h3>
              {description ? (
                <p>
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
            <li key={index} className="list-group-item list-unstyled my-5">
              {disabled ? (
                linkContent
              ) : (
                <Link to={id} style={{ color: "#212529" }}>
                  {linkContent}
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default ArticlesList;
