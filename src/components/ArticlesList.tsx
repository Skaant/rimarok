import * as React from "react";
import { ARTICLES_DATA } from "../data/articles";
import TagsDateHeader from "./TagsDateHeader";

function ArticlesList() {
  return (
    <ul className="list-group list-group-flush p-0">
      {ARTICLES_DATA.map(({ title, description, date, tags }, index) => {
        return (
          <li key={index} className="list-group-item list-unstyled my-5">
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
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
