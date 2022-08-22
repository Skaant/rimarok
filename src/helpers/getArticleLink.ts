import { PAGES_DATA } from "../data/pages";
import { ARTICLES_DATA } from "../data/articles";

function getArticleLink(article: number) {
  return `${PAGES_DATA.BLOG.path}/${ARTICLES_DATA[article].id}`;
}

export default getArticleLink;
