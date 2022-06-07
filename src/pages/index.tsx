import * as React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";

const Accueil = () => {
  return (
    <Layout
      head={{
        pageTitle: "Moins égal plus",
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
