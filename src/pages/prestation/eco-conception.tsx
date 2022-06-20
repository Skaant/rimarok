import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";

const PAGE_ID = PAGES.PRESTATION_ECO_CONCEPTION;
const { title } = PAGES_DATA[PAGE_ID];

const PRESTATION_ECO_CONCEPTION_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "c-est-quoi-eco",
    title: 'C\'est quoi "éco" ?',
  },
  VALEURS: {
    id: "mes-valeurs",
    title: "Mes valeurs",
  },
  AXES_TRAVAIL: {
    id: "axes-de-travail-sur-la-sobriete",
    title: "Axes de travail sur la sobriété",
  },
  BONNES_PRATIQUES: {
    id: "bonnes-pratiques",
    title: "Bonnes pratiques",
  },
  EXEMPLE_SITE: {
    id: "l-exemple-de-ce-site",
    title: "L'exemple de ce site",
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
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.title,
          }}
        >
          <></>
        </Row>
      </>
    </Layout>
  );
}
