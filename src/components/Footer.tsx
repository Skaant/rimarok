import * as React from "react";
import { COLORS } from "../data/colors";
import { PAGES_DATA } from "../data/pages";
import { Link } from "gatsby";
import WEBSITE_DATA from "../data/website";
import LinksMenu from "./LinksMenu";
import { ARTICLES_DATA } from "../data/articles";

type FooterProps = {};

function Footer({}: FooterProps) {
  const pagesArray = [
    PAGES_DATA.ACCUEIL,
    PAGES_DATA.PRESTATION,
    PAGES_DATA.MOTIFS,
    PAGES_DATA.BLOG,
  ];

  const ARTICLES_DATA_COPY = ARTICLES_DATA.slice();

  ARTICLES_DATA_COPY.sort(function (article1, article2) {
    return article2.date
      .split("/")
      .reverse()
      .join("")
      .localeCompare(article1.date.split("/").reverse().join(""));
  });

  return (
    <footer className={`bg-${COLORS.ABYSS}`}>
      <div className="d-flex justify-content-center flex-md-row flex-column-reverse text-white">
        <ul className="list-unstyled p-5 col-sm-12 col-md-6 col-xl-4">
          {pagesArray.map(({ title, path }, index) => {
            return (
              <li className="py-1" key={index}>
                <Link className="text-white pb-2" to={path}>
                  {title}
                </Link>
                {path.includes("prestation") ? (
                  <ul className="list-unstyled">
                    <li className="py-1 pt-2 ps-3" key={index}>
                      <Link
                        className="text-white"
                        to={PAGES_DATA.PRESTATION_INGENIERIE_WEB.path}
                      >
                        {PAGES_DATA.PRESTATION_INGENIERIE_WEB.title}
                      </Link>
                    </li>
                    <li className="py-1 pt-2 ps-3" key={index}>
                      <Link
                        className="text-white"
                        to={PAGES_DATA.PRESTATION_ECO_CONCEPTION.path}
                      >
                        {PAGES_DATA.PRESTATION_ECO_CONCEPTION.title}
                      </Link>
                    </li>
                  </ul>
                ) : path.includes("blog") ? (
                  <ul className="list-unstyled">
                    {ARTICLES_DATA_COPY.slice(0, 5).map(({ title }) => {
                      return (
                        <li className="py-1 pt-2 ps-3" key={index}>
                          <Link className="text-white" to={title}>
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
        <ul className="list-unstyled p-5 col-sm-12 col-md-6 col-xl-4">
          <li className="h3 py-2">{WEBSITE_DATA.BRAND_NAME}</li>
          <li className="py-2">
            Site conçu par Romaric Ruga et{" "}
            <a href="https://eljie.fr/" className="text-lagoon">
              Lucile Joan
            </a>
            , développé par Romaric Ruga et{" "}
            <a href="https://timjeanmart.be/" className="text-lagoon">
              Tim Jeanmart
            </a>
            .
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
