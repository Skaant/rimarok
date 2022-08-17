import React from "react";
import ArticlesList from "../../components/ArticlesList";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";
import { COLORS } from "../../data/colors";

const PAGE_ID = PAGES.BLOG;
const { title } = PAGES_DATA[PAGE_ID];

const BLOG_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "historiser-les-progres",
    title: "Historiser les progrés",
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
        <PageHeader
          title={title}
          subtitle="Réflexions et recherches sur le développement"
          tableOfContents={{ contents: BLOG_SECTIONS }}
          backgroundColor={COLORS.LIGHT_GREEVE}
        />
        <Row
          id={BLOG_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <p>
              Avec l'expérience viennent la connaissance des obstacles et les
              leviers de réussite.
            </p>
            <p>
              Partager mes reflexions c'est un moyen de faire de mon
              apprentissage permanent quelque chose de valeur.
            </p>
            <p>
              Essai d'une solution, pensées sur l'avenir du développement,
              réalisation au sujet d'un motif ... voilà ce que vous pourrez
              trouver sur ce blog.
            </p>
          </>
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
