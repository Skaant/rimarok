import * as React from "react";
import Layout from "../components/Layout";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import "../styles/global.scss";

const Accueil = () => {
  return (
    <Layout
      head={{
        title: "Moins égal plus",
      }}
    >
      <>
        <Row backgroundColor={COLORS.FLOWER}>
          <>
            <h1>Moins égal plus</h1>
            <p>RIMAROK, ingénierie web et eco-conception</p>
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
