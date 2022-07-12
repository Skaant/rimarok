import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { ARTICLES_DATA } from "../../data/articles";

const { title, description } = ARTICLES_DATA[7];

function Article8() {
  return (
    <Layout
      head={{
        title,
        description,
      }}
    >
      <>
        <FullScreenTitle title={title} subtitle={""} />
      </>
    </Layout>
  );
}

export default Article8;
