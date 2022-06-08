import * as React from "react";
import FullScreenTitle from "../components/FullScreenTitle";
import Layout from "../components/Layout";
import "../styles/global.scss";

const Accueil = () => {
  return (
    <Layout
      head={{
        title: "Moins égal plus",
      }}
    >
      <>
        <FullScreenTitle />
      </>
    </Layout>
  );
};

export default Accueil;
