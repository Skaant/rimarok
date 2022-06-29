import React from "react";
import ArticlesList from "../../components/ArticlesList";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";

const PAGE_ID = PAGES.BLOG;
const { title } = PAGES_DATA[PAGE_ID];

const BLOG_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "recherches-et-reflexions",
    title: "Recherches et réflexions",
  },
  LISTE: {
    id: "tous-les-articles",
    title: "Tous les articles",
  },
};

function Blog() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle="Réflexions et recherches sur le développement"
        />
        <Row
          id={BLOG_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={BLOG_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.LISTE.title,
          }}
        >
          <>
            <ArticlesList />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Blog;
