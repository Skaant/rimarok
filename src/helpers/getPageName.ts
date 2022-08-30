import { PAGES, PAGES_DATA } from "../data/pages";

function getPageName(page: PAGES) {
  return PAGES_DATA[page].title;
}

export default getPageName;
