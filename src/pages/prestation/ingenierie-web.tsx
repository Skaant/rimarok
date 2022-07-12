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
          <>
            <p>
              Conjointement ou parallèllement au développement d'applications
              web, je suis capable de créer des scripts pour automatiser des
              taches informatiques.
            </p>
            <p>
              De quelques instructions à des routines de plusieurs fichiers, je
              peux canaliser diverses sources de donner pour obtenir le résultat
              souhaité.
            </p>
            <p>
              Avec la solution Github Actions, je lance des scripts à des
              horaires régulies.
            </p>
            <p>
              L'intégration et le déploiement continu permet aussi ça :
              répercuter immédiatement les changements apportés pour suivre et
              s'adapter à votre environnement.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.SCIENCE_DES_MOTIFS.id}
          header={{
            level: 2,
            content:
              PRESTATION_INGENIERIE_WEB_SECTIONS.SCIENCE_DES_MOTIFS.title,
          }}
        >
          <>
            <p>
              Vous connaissez sans doute le terme de <i>design pattern</i>, mais
              savez-vous de qui s'est inspiré le gang des 4 pour élaborer leur
              recueil de patrons de conception ?
            </p>
            <p>
              J'ai étudié les motifs tels que décrits dans l'ouvrage
              <i>A pattern language</i> de Cristopher Alexander, et une
              révélation m'a frappée :
            </p>
            <Quote displayHeading={3}>
              <p>Tout est motif !</p>
            </Quote>
            <p>
              À force de coder, les applications deviennent des flux de données
              qui, au gré des problématiques métiers, s'agrégent durablement ou
              non en formant
              <b>toujours les mêmes motifs</b>.
            </p>
            <p>
              Développer des applications complexes, certains l'on comparer à
              constuire des cathédrales.
            </p>
            <p>
              Personnellement, je n'en ai jamais bâti par contre je trouver
              qu'une <i>codebase</i> c'est un peu comme un jardin.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.title,
          }}
        >
          <>
            <p>
              À 23 ans, en 2016, je valide mon Master MIAGE (Méthodes
              Informatiques Appliquées à la Gestion d'Entreprise) à l'Université
              de Grenoble.
            </p>
            <p>
              Durant cette formation en 5 ans, nous avons eu l'occasion
              d'acquérir une première expérience professionnelle : deux stages
              de 3 mois et un an d'alternance.
            </p>
            <p>
              J'ai effectué la mienne dans l'agence Business & Decision à Lyon.
            </p>
            <p>
              Avec ce parcours, j'apprends les fondements théoriques de
              l'informatique et travaille sur de nombreux projets très
              pratiques.
            </p>
            <p>
              Une base solide depuis laquelle j'ai pu prendre mon envol comme
              développeur web indépendant.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(PAGES.ACCUEIL),
                  label: "Retour à ma prestation",
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default IngenierieWeb;
