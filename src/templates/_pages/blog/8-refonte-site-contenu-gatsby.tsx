import React from "react";
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import Row from "../../../components/Row";
import { ARTICLES_DATA } from "../../../data/articles";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../../types/GlobalPageContext";
import { PAGES, PAGES_DATA } from "../../../data/pages";
import { COLORS } from "../../../data/colors";

const { title, description, date } = ARTICLES_DATA[7];

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
        <PageHeader
          title={title}
          subtitle={date}
          linksMenu={{
            links: [
              {
                label: "Retour au blog",
                link: PAGES_DATA[PAGES.BLOG].path,
                color: COLORS.ABYSS,
              },
            ],
          }}
        />
      </>
    </Layout>
  );
}

export default Article8;
