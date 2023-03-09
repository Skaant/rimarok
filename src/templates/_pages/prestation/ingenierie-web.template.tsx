import React from "react";
import { PRESTATION_SECTIONS } from "../prestation.template";
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import LinksMenu from "../../../components/LinksMenu";
import Quote from "../../../components/Quote";
import Row from "../../../components/Row";
import { PAGES, PAGES_DATA } from "../../../data/pages";
import getInternalLink from "../../../helpers/getInternalLink";
import Section from "../../../types/Section";
import { COLORS } from "../../../data/colors";
import WEBSITE_DATA from "../../../data/website";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../../types/GlobalPageContext";

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

function IngenierieWeb({
  pageContext,
}: PageProps<undefined, GlobalPageContext>) {
  return (
    <Layout
      head={{
        title,
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={title}
          subtitle="L'ingénierie logicielle pour répondre à vos problématiques métier"
          tableOfContents={{
            contents: PRESTATION_INGENIERIE_WEB_SECTIONS,
            linkColor: COLORS.LIGHT,
          }}
          backgroundColor={COLORS.LAGOON}
          linksMenu={{
            links: [
              {
                link: PAGES_DATA[PAGES.PRESTATION].path,
                label: "Retour à ma prestation",
                color: COLORS.LIGHT,
              },
            ],
          }}
        />
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.INTRO_PAGE.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={["agilité", "meta", "ci/cd", "refactoring"]}
        >
          <>
            <p>
              La vie est une myriade de flux en <b>constant mouvement</b>.
            </p>
            <p>
              <b>Construire dans cet environnement</b> en perpétuelle mutation
              nécessite <b>une grand agilité</b>.
            </p>
            <p>
              L'<b>application web</b> doit être pensée non comme une fin en
              soi, mais comme un processus qui vise des{" "}
              <b>objectifs adaptés au contexte actuel</b>.
            </p>
            <Quote
              displayHeading={5}
              legend={{
                author: "Cristopher Alexander",
                source: "The Timeless Way of Building",
              }}
              backgroundColor={COLORS.SUN}
            >
              <>
                <p>
                  And when a building has this fire, then it becomes a part of
                  nature.
                </p>
                <p>
                  Like ocean waves, or blades of grass, its parts are governed
                  by the endless play of repetition and variety, created in the
                  presence of the fact that all things pass.
                </p>
                <p>This is the quality itself.</p>
              </>
            </Quote>
            <p>
              En plus de <b>concepts fondamentaux de développement maîtrisés</b>
              , j'apporte avec moi la puissance de l'
              <b>intégration et du déploiement continus</b> (CI/CD).
            </p>
            <p>
              Et{" "}
              <b>lorsque le projet devient une jungle, j'ouvre des chemins</b>{" "}
              (refactoring).
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK.title,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={["polyvalence", "modularité"]}
        >
          <>
            <Quote displayHeading={3} backgroundColor={COLORS.ABYSS}>
              <p>Front, back, databases</p>
            </Quote>
            <p>
              Être <b>full-stack</b> c'est avoir développé sa{" "}
              <b>sensibilité aux enjeux de ces trois composants</b> primordiaux.
            </p>
            <p>
              Le <b>front-end</b> doit suivre le{" "}
              <b>travail du designer tout en fluidifiant</b> le retour
              utilisateur.
            </p>
            <p>
              Le <b>back-end</b> suit à son tour le front mais constitue la
              forteresse où
              <b>tout ce qui est précieux est calculé</b>.
            </p>
            <p>
              Enfin,{" "}
              <b>la (ou les) base(s) de données conserve(nt) en mémoire</b> le
              coeur de toute application : <b>l'information</b>.
            </p>
            <p>
              <b>Généraliste expérimenté avec une vision critique</b>, je peux
              intervenir sur ces différents sujets lors de mes prestations.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES
                  ),
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
                  color: COLORS.ABYSS,
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
          backgroundColor={COLORS.LIGHT}
          tags={["petites missions", "api", "gestion de fichiers", "plugins"]}
        >
          <>
            <p>
              Conjointement ou parallèllement au développement d'applications
              web, je suis capable de{" "}
              <b>créer des scripts pour automatiser des taches informatiques</b>
              .
            </p>
            <p>
              De{" "}
              <b>quelques instructions à des routines en nombreux fichiers</b>,
              je peux canaliser <b>diverses sources de données</b> pour obtenir
              le résultat désiré.
            </p>
            <p>
              Avec la solution Github Actions, je permets le{" "}
              <b>
                lancement de scripts manuellement ou à des horaires réguliers
              </b>
              .
            </p>
            <p>
              L'intégration et le déploiement continu permet aussi ça :
              <b>répercuter immédiatement les changements</b> apportés pour
              suivre et
              <b>s'adapter à votre environnement</b>.
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
          backgroundColor={COLORS.SUN}
          tags={["a pattern language", "flux", "optimisation"]}
        >
          <>
            <p>
              Vous connaissez sans doute le terme de <b>design pattern</b>, mais
              savez-vous <b>de qui s'est inspiré le gang des 4</b> pour élaborer
              leur
              <b>recueil de motifs de conception</b> ?
            </p>
            <p>
              J'ai étudié les motifs tels que décrits dans l'ouvrage{" "}
              <b>A pattern language</b> de Christopher Alexander, et{" "}
              <b>une révélation m'a frappé</b> :
            </p>
            <Quote displayHeading={3} backgroundColor={COLORS.MIST}>
              <p>Tout, tout est motif !</p>
            </Quote>
            <p>
              À force de coder, les <b>applications</b> deviennent des{" "}
              <b>flux de données</b>
              qui, au gré des problématiques métiers, <b>s'agrégent</b>{" "}
              durablement ou non en formant
              <b>toujours les mêmes motifs</b>.
            </p>
            <p>
              <b>Développer</b> des applications complexes, certains l'on
              comparé à <b>constuire des cathédrales</b> ...
            </p>
            <p>
              Personnellement, je n'en ai jamais bâti par contre je trouve qu'
              <b>une codebase c'est un peu comme une forêt</b> :
            </p>
            <p>
              Elle devrait se <b>gérer toute seule</b>, mais on peut en{" "}
              <b>optimiser les flux pour accéler l'amélioration</b> de ses
              qualités.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(PAGES.MOTIFS),
                  label: "En savoir plus sur les motifs",
                  color: COLORS.MIST,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.id}
          header={{
            level: 2,
            content: PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE.title,
          }}
          tags={["diplôme", "alternance", "cv"]}
        >
          <>
            <p>
              À 23 ans, en 2016, je valide mon <b>Master MIAGE</b> (Méthodes
              Informatiques Appliquées à la Gestion d'Entreprise) à l'Université
              de Grenoble.
            </p>
            <p>
              Durant cette formation en 5 ans, nous avons acquis une{" "}
              <b>importante première expérience professionnelle</b> : deux
              stages de 3 mois et un an d'alternance.
            </p>
            <p>
              J'ai effectué mon <b>alternance</b> dans l'agence Business &
              Decision à Lyon.
            </p>
            <p>
              Avec ce parcours, j'apprends les{" "}
              <b>fondements théoriques de l'informatique</b> et travaille sur de
              nombreux <b>projets pratiques</b>.
            </p>
            <p>
              Une <b>base solide</b> depuis laquelle j'ai pu prendre{" "}
              <b>mon envol comme développeur web indépendant</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: WEBSITE_DATA.LINKEDIN_LINK,
                  label: "La suite de mon parcours sur LinkedIn",
                },
                {
                  link: getInternalLink(PAGES.ACCUEIL),
                  label: "Ma prestation",
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
