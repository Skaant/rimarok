import React from "react";
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import Row from "../../../components/Row";
import { ARTICLES_DATA } from "../../../data/articles";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../../types/GlobalPageContext";

const { title, description } = ARTICLES_DATA[7];

function Article8({ pageContext }: PageProps<undefined, GlobalPageContext>) {
  return (
    <Layout
      head={{
        title,
        description,
      }}
      {...pageContext}
    >
      <>
        <PageHeader title={title} subtitle={""} />
      </>
    </Layout>
  );
}

export default Article8;
