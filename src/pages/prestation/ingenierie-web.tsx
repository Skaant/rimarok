import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";

const PAGE_ID = PAGES.PRESTATION_INGENIERIE_WEB;
const { title } = PAGES_DATA[PAGE_ID];

const PRESTATION_INGENIERIE_WEB_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "philosophie-d-une-application-web",
    title: "Philosophie d'une application web",
  },
  FULL_STACK: {
    id: "piliers-full-stack",
    title: "Les 3 piliers du full-stack",
  },
  SCRIPTS_AUTOMATISATION: {
    id: "scripts-et-automatisation",
    title: "Scripts et automatisation",
  },
  SCIENCE_DES_MOTIFS: {
    id: "science-des-motifs",
    title: "Science des motifs",
  },
  UNIVERSITE: {
    id: "cursus-universitaire",
    title: "Mon cursus universitaire",
  },
};

export function IngenierieWeb() {
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
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.SCRIPTS_AUTOMATISATION.id}
          header={{
            level: 2,
            content:
              PRESTATION_INGENIERIE_WEB_SECTIONS.SCRIPTS_AUTOMATISATION.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.SCIENCE_DES_MOTIFS.id}
          header={{
            level: 2,
            content:
              PRESTATION_INGENIERIE_WEB_SECTIONS.SCIENCE_DES_MOTIFS.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.title,
          }}
        >
          <></>
        </Row>
      </>
    </Layout>
  );
}
