import * as React from "react";
import Layout from "../components/Layout";
import type Header from "../types/Header";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import "../styles/global.scss";

const ACCUEIL_TITLE = "Construire un internet durable";

const Accueil = () => {
  return (
    <Layout
      head={{
        title: ACCUEIL_TITLE,
      }}
    >
      <>
        <Row backgroundColor={COLORS.FLOWER}>
          <>
            <h1>{ACCUEIL_TITLE}</h1>
            <p>RIMAROK, ingénierie web et eco-conception</p>
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
