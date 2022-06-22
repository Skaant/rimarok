import * as React from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import TableOfContents from "../components/TableOfContents";
import type Section from "../types/Section";
import "../styles/global.scss";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import FullScreenTitle from "../components/FullScreenTitle";
import { Link } from "gatsby";

const STYLEGUIDE_TITLE = "Styleguide";

const STYLEGUIDE_SECTIONS: { [section: string]: Section } = {
  LAYOUT: {
    id: "layout",
    title: "Layout",
  },
  /* Row-sized */
  ROW: {
    id: "row",
    title: "Row",
  },
  FULL_SIZE_TITLE: {
    id: "full-size-title",
    title: "Full size title",
  },
  MOTIFS_LIST: {
    id: "motifs-list",
    title: "Motifs list",
  },
  ARTICLES_LIST: {
    id: "articles-list",
    title: "Articles list",
  },
  /* Row content-sized */
  TABLE_OF_CONTENTS: {
    id: "table-of-contents",
    title: "Table of contents",
  },
  QUOTE: {
    id: "quote",
    title: "Quote",
  },
  LINKSMENU: {
    id: "links-menu",
    title: "Links menu",
  },
  BADGESLIST: {
    id: "badges-list",
    title: "Badges list",
  },
  PROJECT: {
    id: "project",
    title: "Project",
  },
  BACKTOTOP: {
    id: "back-to-top",
    title: "Back to top",
  },
};

const Styleguide = () => {
  return (
    <Layout
      head={{
        title: STYLEGUIDE_TITLE,
      }}
    >
      <>
        <FullScreenTitle
          title={STYLEGUIDE_TITLE}
          subtitle="Galerie des composants du site"
          backgroundColor={COLORS.LAGOON}
        />
        <Row
          header={{
            level: 2,
            content: "Liste des composants",
          }}
          className="mt-5"
        >
          <>
            <TableOfContents
              contents={STYLEGUIDE_SECTIONS}
              linkClassName="font-slab"
            />
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.LAYOUT.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.LAYOUT.title}</h2>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.ROW.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.ROW.title}</h2>
            <p>
              Le composant <span className="font-slab">Row</span> décrit une{" "}
              <b>section de page</b> .
            </p>
            <p>
              Une page est faite d'
              <b>
                une série de <span className="font-slab">Row</span>
              </b>
              , les uns en dessous des autres.
            </p>
            <p>
              Le composant peut ensuite être{" "}
              <b>décliné en d'autres composants de section</b>, tels que{" "}
              <Link
                to={`#${STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.id}`}
                className="font-slab"
              >
                {STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.title}
              </Link>
              ,{" "}
              <Link
                to={`#${STYLEGUIDE_SECTIONS.ARTICLES_LIST.id}`}
                className="font-slab"
              >
                {STYLEGUIDE_SECTIONS.ARTICLES_LIST.title}
              </Link>
              .
            </p>
          </>
        </Row>
        <Row>
          <>
            <h3>Variations de couleur</h3>
          </>
        </Row>
        <Row backgroundColor={COLORS.ABYSS}>
          <>
            <p>
              Couleur <i>abyss</i>
            </p>
          </>
        </Row>
        <Row backgroundColor={COLORS.FLOWER}>
          <>
            <p>
              Couleur <i>flower</i>
            </p>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.QUOTE.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.QUOTE.title}</h2>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Sans légende)</p>
            <Quote displayHeading={6}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Pas de source, mais un auteur)</p>
            <Quote displayHeading={6} legend={{ author: "Auteur optionnel" }}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Source, mais pas d'auteur)</p>
            <Quote displayHeading={6} legend={{ source: "Source optionnelle" }}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Source et auteur)</p>
            <Quote
              displayHeading={6}
              legend={{
                source: "Source optionnelle",
                author: "Auteur optionnel",
              }}
            >
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.title}</h2>
            <p>Permet la navigation entre les sections d'une page.</p>
          </>
        </Row>
        <Row>
          <>
            <TableOfContents
              contents={{
                demo: {
                  id: "demo",
                  title: "Démonstration",
                },
              }}
            />
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Styleguide;
