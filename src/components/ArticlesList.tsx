import * as React from "react";
import { ARTICLES_DATA } from "../data/articles";

type ArticlesListProps = {};

function ArticlesList({}: ArticlesListProps) {
  return (
    <ul className="list-group list-group-flush">
      {ARTICLES_DATA.map(({ id, title, description, date }, index) => {
        return (
          <li key={index} className="list-group-item">
            <h3>{title}</h3>
            {description ? <p>{description.substring(0, 150) + "..."}</p> : ""}
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
