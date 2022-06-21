import React from "react";
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

export function Blog() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle="Ce que signifie être full-stack"
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
          id={BLOG_SECTIONS.VALEURS.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.VALEURS.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={BLOG_SECTIONS.AXES_TRAVAIL.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.AXES_TRAVAIL.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={BLOG_SECTIONS.BONNES_PRATIQUES.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.BONNES_PRATIQUES.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={BLOG_SECTIONS.EXEMPLE_SITE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.EXEMPLE_SITE.title,
          }}
        >
          <></>
        </Row>
      </>
    </Layout>
  );
}
