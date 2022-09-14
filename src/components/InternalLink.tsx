import { Link } from "gatsby";
import React from "react";
import { PAGES, PAGES_DATA } from "../data/pages";
import Section from "../types/Section";

type InternalLinkProps = {
  page?: PAGES;
  section?: Section;
  altTitle?: string;
  lowercase?: true;
  className?: string;
};

function InternalLink({
  page,
  section,
  altTitle,
  lowercase,
  className,
}: InternalLinkProps) {
  return (
    <Link
      to={`${page ? `${PAGES_DATA[page].path}` : ""}${
        section ? `#${section.id}` : ""
      }`}
      className={className}
    >
      {altTitle ||
        (section
          ? lowercase
            ? section.title.toLowerCase()
            : section.title
          : page
          ? lowercase
            ? PAGES_DATA[page].title.toLowerCase()
            : PAGES_DATA[page].title
          : "")}
    </Link>
  );
}

export default InternalLink;
