import * as React from "react";
import { COLORS } from "../data/colors";
import { PAGES, PAGES_DATA } from "../data/pages";
import { Link } from "gatsby";
import WEBSITE_DATA from "../data/website";
import LinksMenu from "./LinksMenu";
import getInternalLink from "../helpers/getInternalLink";
import { PRESTATION_SECTIONS } from "../templates/_pages/prestation.template";
import { GlobalPageContext } from "../types/GlobalPageContext";
import { ACCUEIL_SECTIONS } from "../templates/_pages/accueil.template";

function Footer({
  firstMotifsLink,
  motifsLength,
  lastArticlesLink,
}: GlobalPageContext) {
  return (
    <footer className={`bg-${COLORS.ABYSS}`}>
      <div className="d-flex justify-content-center flex-md-row flex-column text-white">
        <div className="p-5 col-12 col-md-6">
          <ul className="list-unstyled">
            {[
              {
                ...PAGES_DATA.ACCUEIL,
                title: "Accueil",
              },
              /* PAGES_DATA.PRESTATION,
            PAGES_DATA.MOTIFS,
            PAGES_DATA.BLOG,
            PAGES_DATA.STYLEGUIDE, */
            ].map(({ title, path }, index) => {
              return (
                <li className="py-1" key={index}>
                  <Link className="text-white pb-2" to={path}>
                    {title}
                    {path.includes("motifs") ? ` (${motifsLength})` : ""}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LinksMenu
            links={[
              {
                link: PAGES_DATA.MENTIONS_LEGALES.path,
                label: PAGES_DATA.MENTIONS_LEGALES.title,
                color: COLORS.LIGHT,
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 p-5">
          <img src="/small-stars.svg" />
          <ul className="list-unstyled">
            <li className="h3 py-2">{WEBSITE_DATA.BRAND_NAME}</li>
            <li className="py-2">
              Site conçu par Romaric Ruga et{" "}
              <a href="https://eljie.fr/" className="text-data">
                Lucile Joan
              </a>
              , développé par Romaric Ruga et{" "}
              <a href="https://timjeanmart.be/" className="text-data">
                Tim Jeanmart
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
