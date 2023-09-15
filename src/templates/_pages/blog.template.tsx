import React from "react";
import ArticlesList from "../../components/ArticlesList";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";
import { COLORS } from "../../data/colors";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../types/GlobalPageContext";
import { Link } from "nebula-atoms";

const PAGE_ID = PAGES.BLOG;
const { title } = PAGES_DATA[PAGE_ID];

export type BlogTemplateContext = GlobalPageContext & {
  links: Link[];
};

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

export function Blog({
  pageContext: { links, ...pageContext },
}: PageProps<undefined, BlogTemplateContext>) {
  return (
    <Layout
      head={{
        title,
        description:
          "Plus qu'un métier, le développement web est une véritable passion pour moi. Intéressé par le renouvellement permanent de l'éco-système, je partage ici mes découvertes et mes expériementations.",
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={title}
          subtitle="Réflexions et recherches sur le développement"
          tableOfContents={{ contents: BLOG_SECTIONS, linkColor: COLORS.LIGHT }}
          backgroundColor={COLORS.LAGOON}
        />
        <Row
          id={BLOG_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.INTRO_PAGE.title,
          }}
          tags={["motivation", "partage", "gestion des connaissances"]}
        >
          <>
            <p>
              Avec l'expérience viennent la{" "}
              <b>connaissance des obstacles et des leviers de réussite</b>.
            </p>
            <p>
              Partager mes reflexions c'est un moyen de{" "}
              <b>
                faire de mon apprentissage permanent quelque chose de valeur
              </b>
              .
            </p>
            <p>
              Essai d'une solution, pensées sur le développement, réalisation au
              sujet d'un motif ... voilà <b>divers sujets</b>que vous trouverez
              sur ce blog.
            </p>
          </>
        </Row>
        <Row
          id={BLOG_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: BLOG_SECTIONS.LISTE.title,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={[
            "transfert en cours",
            "réflexions",
            "actualités",
            "découvertes",
          ]}
        >
          <>
            <p>
              Une partie des articles mentionnés ici{" "}
              <b>attendent d'être transféré</b> depuis mon ancien site
              jusqu'ici.
            </p>
            <ArticlesList links={links} />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Blog;
