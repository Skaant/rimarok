import React from "react";
import { PRESTATION_SECTIONS } from ".";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import LinksMenu from "../../components/LinksMenu";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import getInternalLink from "../../helpers/getInternalLink";
import Section from "../../types/Section";

const PAGE_ID = PAGES.PRESTATION_INGENIERIE_WEB;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_INGENIERIE_WEB_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "philosophie-d-une-application-web",
    title: "Philosophie d'une application web",
  },
  FULL_STACK: {
    id: "piliers-full-stack",
    title: "Les 3 piliers de la full-stack",
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

function IngenierieWeb() {
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
          <>
            <p>La vie est une myriade de flux en constant mouvement.</p>
            <p>
              Construire dans cet environnement en perpétuelle mutation
              nécessite une grand agilité.
            </p>
            <p>
              Ainsi l'application web doit être pensée non comme une fin en soi,
              mais comme un processus qui vise des objectifs pertinents avec le
              contexte actuel.
            </p>
            <p>
              En plus de concepts primordiaux de développement bien maîtrisés,
              j'apporte avec moi la puissance de l'intégration et du déploiement
              continus.
            </p>
            <p>Et lorsque le projet devient une jungle, j'ouvre des chemins.</p>
          </>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.title,
          }}
        >
          <>
            <Quote displayHeading={3}>
              <p>Front, back, databases</p>
            </Quote>
            <p>
              Être <i>full-stack</i> c'est avoir développé sa sensibilité aux
              enjeux de ces trois composants fondamentaux.
            </p>
            <p>
              Le front doit suivre le travail du designer en minimisant les
              temps d'attente utilisateur.
            </p>
            <p>
              Le back suit à son tour le front mais constitue la forteresse où
              tout ce qui est précieux est calculé.
            </p>
            <p>
              Enfin, la (ou les) base(s) de données conserve(nt) en mémoire le
              coeur de toutes applications : l'information.
            </p>
            <p>
              Généraliste avec une vision critique, je peux intervenir sur ces
              différents sujets lors de mes prestations.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES
                  ),
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
                },
              ]}
            />
          </>
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

export default IngenierieWeb;
