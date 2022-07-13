import React from "react";
import PageHeader from "../../components/PageHeader";
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
        <PageHeader title={title} subtitle={""}/>
      </>
    </Layout>
  );
}

export default Article8;
