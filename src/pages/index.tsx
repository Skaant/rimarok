import * as React from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import TableOfContents from "../components/TableOfContents";
import type Header from "../types/Header";
import "../styles/global.scss";

const Accueil = () => {
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

  return (
    <Layout
      head={{
        title: "Moins égal plus",
      }}
    >
      <>
        <h1>Moins égal plus</h1>
        <p>RIMAROK, ingénierie web et eco-conception</p>
      </>
    </Layout>
  );
};

export default Accueil;
