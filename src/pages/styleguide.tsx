import * as React from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import TableOfContents from "../components/TableOfContents";
import type Header from "../types/Header";
import "../styles/global.scss";
import Row from "../components/Row";
import { COLORS } from "../data/colors";

const STYLEGUIDE_TITLE = "Styleguide";

const STYLEGUIDE_HEADERS: Header[] = [
  {
    id: "row",
    title: "Row",
  },
  {
    id: "table-of-contents",
    title: "Table of contents",
  },
  {
    id: "quote",
    title: "Quote",
  },
];

const Accueil = () => {
  return (
    <Layout
      head={{
        title: STYLEGUIDE_TITLE,
      }}
    >
      <Row backgroundColor={COLORS.SUN}>
        <>
          <h1>{STYLEGUIDE_TITLE}</h1>
          <p>Démonstration des composants du site.</p>
          <TableOfContents contents={STYLEGUIDE_HEADERS} />
        </>
      </Row>
    </Layout>
  );
};

export default Accueil;
