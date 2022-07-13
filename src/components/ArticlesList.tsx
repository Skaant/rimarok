import * as React from "react";
import { ARTICLES_DATA } from "../data/articles";
import TagsDateHeader from "./TagsDateHeader";
import { Link } from "gatsby";

function ArticlesList() {
  const ARTICLES_DATA_COPY = ARTICLES_DATA.slice();

  ARTICLES_DATA_COPY.sort(function (article1, article2) {
    return article2.date
      .split("/")
      .reverse()
      .join("")
      .localeCompare(article1.date.split("/").reverse().join(""));
  });

  return (
    <ul className="list-group list-group-flush p-0">
      {ARTICLES_DATA_COPY.map(
        ({ id, title, description, date, tags }, index) => {
          return (
            <li key={index} className="list-group-item list-unstyled my-5">
              <Link to={id} style={{ color: "#212529" }}>
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
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}

export default ArticlesList;
