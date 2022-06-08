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
      <Row backgroundColor={COLORS.SUN}>
        <>
          <h1>{STYLEGUIDE_TITLE}</h1>
          <p>Démonstration des composants du site.</p>
          <TableOfContents contents={STYLEGUIDE_HEADERS_DATA} />
        </>
      </Row>
    </Layout>
  );
};

export default Styleguide;
