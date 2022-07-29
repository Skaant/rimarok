import { PAGES, PAGES_DATA } from "../data/pages";
import Section from "../types/Section";

function getInternalLink(page: PAGES, section?: Section) {
  return `${PAGES_DATA[page].path}${section ? `#${section.id}` : ""}`;
}

export default getInternalLink;
