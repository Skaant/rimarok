import * as React from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import TableOfContents from "../components/TableOfContents";
import type Header from "../types/Header";
import "../styles/global.scss";
import Row from "../components/Row";
import { COLORS } from "../data/colors";

const STYLEGUIDE_TITLE = "Styleguide";

enum STYLEGUIDE_HEADERS {
  ROW = "ROW",
  TABLE_OF_CONTENTS = "TABLE_OF_CONTENTS",
  QUOTE = "QUOTE",
}

const STYLEGUIDE_HEADERS_DATA: { [header in STYLEGUIDE_HEADERS]: Header } = {
  ROW: {
    id: "row",
    title: "Row",
  },
  TABLE_OF_CONTENTS: {
    id: "table-of-contents",
    title: "Table of contents",
  },
  QUOTE: {
    id: "quote",
    title: "Quote",
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
        <Row backgroundColor={COLORS.SUN}>
          <>
            <h1>{STYLEGUIDE_TITLE}</h1>
            <p>Démonstration des composants du site.</p>
            <TableOfContents contents={STYLEGUIDE_HEADERS_DATA} />
          </>
        </Row>
        <Row>
          <>
            <h2 id={STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.ROW].id}>
              {STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.ROW].title}
            </h2>
            <p>
              Le composant <i>Row</i> décrit une section de page.
            </p>
            <p>
              Il est ensuite décliné par tous les autres composants sections, tels que CTA,
              Carousel.
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
        <Row>
          <>
            <h2 id={STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.QUOTE].id}>
              {STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.QUOTE].title}
            </h2>
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
            <Quote displayHeading={6} legend={{ source: "Source optionnelle", author:"Auteur optionnel"}}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h2 id={STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.TABLE_OF_CONTENTS].id}>
              {STYLEGUIDE_HEADERS_DATA[STYLEGUIDE_HEADERS.TABLE_OF_CONTENTS].title}
            </h2>
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
