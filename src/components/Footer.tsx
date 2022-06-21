import * as React from "react";
import { COLORS } from "../data/colors";
import { PAGES_DATA } from "../data/pages";
import { Link } from "gatsby";
import WEBSITE_DATA from "../data/website";
import LinksMenu from "./LinksMenu";

type FooterProps = {};

function Footer({}: FooterProps) {
  const pagesArray = [
    PAGES_DATA.ACCUEIL,
    PAGES_DATA.PRESTATION,
    PAGES_DATA.PRESTATION_INGENIERIE_WEB,
    PAGES_DATA.PRESTATION_ECO_CONCEPTION,
    PAGES_DATA.MOTIFS,
    PAGES_DATA.BLOG,
  ];

  return (
    <footer className={`bg-${COLORS.ABYSS}`}>
      <div className="d-flex justify-content-center flex-sm-column flex-row text-white">
        <ul className="list-unstyled p-5 col-xl-4">
          {pagesArray.map(({ title, path }, index) => {
            return (
              <li className="py-1" key={index}>
                <Link
                  className={`text-white pb-2 ${
                    path.match(/\/.*\//) ? "ps-3" : ""
                  }`}
                  to={path}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="list-unstyled p-5 col-xl-4">
          <li className="py-2">{WEBSITE_DATA.BRAND_NAME}</li>
          <li className="py-2">
            Site conçu par Romaric Ruga et Lucile Joan, développé par Romaric
            Ruga et Tim Jeanmart.
          </li>
          <LinksMenu
            links={[
              { link: "#", label: "Contact" },
              {
                link: PAGES_DATA.MENTIONS_LEGALES.path,
                label: PAGES_DATA.MENTIONS_LEGALES.title,
              },
            ]}
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;