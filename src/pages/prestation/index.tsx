import { Link } from "gatsby";
import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Section from "../../types/Section";

const PAGE_ID = PAGES.PRESTATION;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "besoin-d-un-coup-de-pouce",
    title: "Quand un projet a besoin d'un coup de pouce",
  },
  PERSONNALITE: {
    id: "une-personnalite-d'abord",
    title: "Une personnalité d'abord",
  },
  SAVOIR_FAIRE_ET_TECHNOLOGIES: {
    id: "mon-savoir-faire-et-technologies",
    title: "Mon savoir-faire, et technologies",
  },
  TARIF: {
    id: "un-tarif-unique",
    title: "Un tarif unique",
  },
  CONTACT: {
    id: "contact",
    title: "Pour entrer en contact",
  },
  WEB_HOLISTIQUE: {
    id: "une-vision-holistique-de-l-informatique",
    title: "Une vision holistique de l'informatique",
  },
  REALISATIONS: {
    id: "realisations",
    title: "Mes réalisations",
  },
  /** CTA contact */
  TRAVAILLER_ENSEMBLE: {
    id: "travailler-ensemble",
    title: "Travailler ensemble",
  },
  /** CTA blog */
  ALLER_PLUS_LOIN: {
    id: "aller-plus-loin",
    title: "Aller plus loin",
  },
};

function Prestation() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle="La pièce manquante du puzzle"
        />
        <Row
          id={PRESTATION_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <p>
              Start-ups, PME, DSI ... vous souhaitez{" "}
              <b>accélerer le développement</b> de l'un de vos projets
              applicatifs ?
            </p>
            <p>
              Mon rôle, <b>en tant qu'indépendant</b>, c'est de venir{" "}
              <b>compléter ponctuellement vos équipes de développement web</b>.
            </p>
            <p>
              J'interviens en <b>full-remote</b>, jusqu'à <b>4 jours/semaine</b>
              sur des projets <b>front, back et full-stack JavaScript</b>.
            </p>
            <p>
              Mon expertise mêle{" "}
              <Link to={PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path}>
                {PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].title}
              </Link>
              et{" "}
              <Link to={PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path}>
                {PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].title}
              </Link>
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.PERSONNALITE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.PERSONNALITE.title,
          }}
        >
          <>
            <p>
              Je suis <b>un individu</b>, pas un portefeuille de compétences.
            </p>
            <p>
              En plus de mes septs années de pratiques professionnelles, c'est
              ma curiosité et ma créativité qui ont forgé mon expertise dans le
              domaine du développement web.
            </p>
            <p>
              J'aime questionner et comprendre, aborder les problématiques
              autrement et chercher des solutions plus simples.
            </p>
            <p>
              Enfin, je communique clairement et c'est dans des équipes
              bienveillantes et dynamiques que je m'épanouis le plus.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.SAVOIR_FAIRE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.SAVOIR_FAIRE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TARIF.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.SAVOIR_FAIRE.title,
          }}
        >
          <>
            <p>Une prestation, un tarif :</p>
            <p className="display-1">420€/jour HT</p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.CONTACT.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.CONTACT.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.WEB_HOLISTIQUE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.WEB_HOLISTIQUE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.REALISATIONS.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.REALISATIONS.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.title,
          }}
        >
          <></>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.ALLER_PLUS_LOIN.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.ALLER_PLUS_LOIN.title,
          }}
        >
          <></>
        </Row>
      </>
    </Layout>
  );
}

export default Prestation;
