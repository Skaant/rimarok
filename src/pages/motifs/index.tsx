import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";

const PAGE_ID = PAGES.MOTIFS;
const { title } = PAGES_DATA[PAGE_ID];

const MOTIFS_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "harmonie-du-code",
    title: "Trouver l'harmonie du code",
  },
  WHAT_IS: {
    id: "qu-est-ce-qu-un-motif",
    title: "Qu'est-ce qu'un motif ?",
  },
  HOW_TO: {
    id: "utilisation",
    title: "Utilisation",
  },
  LISTE: {
    id: "liste-motifs-informatiques",
    title: "Liste des motifs informatiques",
  },
  HISTORIQUE: {
    id: "historique-des-design-patterns",
    title: 'Historique des "design patterns"',
  },
  /** CTA contact */
  CONTRIBUER: {
    id: "contribuer",
    title: "Contibuer",
  },
};

export function Motifs() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle title={title} subtitle="Un langage de conception" />
        <Row
          id={MOTIFS_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.WHAT_IS.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.WHAT_IS.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.HOW_TO.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.HOW_TO.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.LISTE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.HISTORIQUE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.HISTORIQUE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.CONTRIBUER.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.CONTRIBUER.title,
          }}
        >
          <></>
        </Row>
      </>
    </Layout>
  );
}
