import * as React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import Carousel from "../components/Carousel";
import LinksMenu, { LinksMenuItem } from "../components/LinksMenu";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import Section from "../types/Section";
import { PRESTATION_SECTIONS } from "./prestation";
import { Link } from "gatsby";
import getInternalLink from "../helpers/getInternalLink";
import InternalLink from "../components/InternalLink";
import { PERSONAL_PROJECTS } from "../components/_projects/persos";
import { PROFESSIONAL_PROJECTS } from "../components/_projects/pros";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "performances-et-economies",
    title: "Performances et économies",
  },
  INTRO_PAGE: {
    id: "full-stack-js-ecologique",
    title: "Full-stack JS écologique",
  },
  PROJETS_PROFESSIONNELS: {
    id: "projets-professionnels",
    title: "Projets profesionnels",
  },
  CODE_PHILOSOPHIE: {
    id: "le-code-une-philosophie",
    title: "Le code, une philosophie",
  },
  PROJETS_PERSONNELS: {
    id: "projets-personnels",
    title: "Projets personnels",
  },
  COLLABORATION: {
    id: "vers-une-collaboration-future",
    title: "Vers une collaboration future",
  },
};

const Accueil = () => {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <PageHeader
          title={title}
          subtitle={WEBSITE_DATA.TITLE}
          backgroundColor={COLORS.FLOWER}
          titleSize={"big"}
          linksMenu={{
            links: Object.entries(PAGES_DATA)
              .filter(
                ([key]) =>
                  ![
                    PAGES.ACCUEIL,
                    PAGES.MOTIFS,
                    PAGES.STYLEGUIDE,
                    PAGES.MENTIONS_LEGALES,
                  ].includes(key as PAGES)
              )
              .map<LinksMenuItem>(([key, { path, title }]) => ({
                link: path,
                label: title,
                color: [
                  PAGES.PRESTATION_INGENIERIE_WEB,
                  PAGES.PRESTATION_ECO_CONCEPTION,
                ].includes(key as PAGES)
                  ? COLORS.LIGHT
                  : COLORS.ABYSS,
              })),
          }}
          tableOfContents={{
            contents: ACCUEIL_SECTIONS,
            color: COLORS.ABYSS,
            linkColor: COLORS.LIGHT,
          }}
        />
        <Row
          header={{
            level: 2,
            content: "Accueil",
          }}
          tags={["développeur web", "indépendant", "à l'écoute"]}
        >
          <>
            <p>
              Bonjour, je m'appelle <b>Romaric Ruga</b> et vous êtes sur mon{" "}
              <b>site professionnel</b> de <b>développeur web indépendant</b>.
            </p>
            <p>
              Je suis curieux de{" "}
              <b>découvrir de nouvelles équipes et environnements</b>.
            </p>
            <p>
              Laissez-moi vous{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                altTitle={"présenter ma prestation"}
              />{" "}
              ainsi que{" "}
              <b>
                ma vision{" "}
                <InternalLink
                  page={PAGES.PRESTATION_INGENIERIE_WEB}
                  altTitle="efficace"
                />{" "}
                et{" "}
                <InternalLink
                  page={PAGES.PRESTATION_ECO_CONCEPTION}
                  altTitle="sobre"
                />{" "}
                de l'informatique
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.INTRO_SITE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_SITE.title,
          }}
          backgroundColor={COLORS.SUN}
          tags={["optimisation", "sobriété"]}
        >
          <>
            <Quote displayHeading={4}>
              <>
                Internet devrait servir à résoudre des problèmes, tout en
                minimisant ceux qu'il peut créer.
              </>
            </Quote>
            <p>
              Les usages de l'informatique créent des{" "}
              <b>besoins exponentiels</b> en infrastructure matérielle et en
              puissance de calcul.
            </p>
            <p>
              Même au sein d'un projet applicatif,{" "}
              <b>
                l'ajout de nouvelles fonctionnalités multiplie la consommation
                de ressources
              </b>{" "}
              (y compris humaines) au lieu de le réduire par{" "}
              <b>généralisation et industrialisation.</b>
            </p>
            <p>
              Pourtant,{" "}
              <b>cette croissance pourrait et devrait être endiguée</b>.
            </p>
            <p>
              Les programmes conservent des <b>performances optimisées</b>, sans
              être plus coûteux.
            </p>
            <p>
              Mon intervention en ingénierie web permet d'
              <b>étendre le périmètre fonctionnel de vos applications</b>, tout
              en <b>limitant les "prises de poids" logicielles</b>.
            </p>
            <LinksMenu
              links={[
                {
                  label: "Découvrir ma prestation",
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                  color: COLORS.MIST,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_PAGE.title,
          }}
          tags={["parcours", "green-it", "typescript", "react"]}
        >
          <>
            <p>
              Diplomé d'un <b>Master MIAGE option énergie</b> en 2016, j'exerce
              depuis l'activité de <b>développeur web en tant qu'indépendant</b>
              .
            </p>
            <p>
              C'est pendant mes études que j'ai été sensibilisé au sujet du{" "}
              <b>Green-IT</b>.
            </p>
            <p>
              Spécialisé dans la <b>full-stack JavaScript</b>{" "}
              <i>
                (TypeScript, Node, React, Express, Jest, Nest, Vue, Angular ...)
              </i>
              , je mets également en oeuvre des{" "}
              <b>bonnes pratiques d'éco-conception logicielle</b>.
            </p>
            <p>
              Au croisement de ces deux sujets apparaît une{" "}
              <b>puissante efficience</b>, qui <b>accélère les applications</b>{" "}
              et <b>réduit les dépenses</b> .
            </p>
            <LinksMenu
              links={[
                {
                  label: "Expertise full-stack JavaScript",
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                },
                {
                  label: "Bonnes pratiques d'éco-conception",
                  link: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.title,
          }}
          backgroundColor={COLORS.LAGOON}
          colClassName="text-white"
          tags={["expériences", "mission-type", "stacks", "votre projet"]}
        >
          <>
            <p>
              C'est la <b>diversité des contextes</b> qui dirige ma carrière
              professionnelle.
            </p>
            <p>
              Mais le fil rouge est toujours les <b>technos JS et full-stack</b>
              .
            </p>
            <p>
              Retrouvez ci-dessous une sélection de mes expériences les plus
              pertinentes :
            </p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.id}_carousel`}
              controlsColor={COLORS.LIGHT}
              children={PROFESSIONAL_PROJECTS}
            />
            <p>
              Peut-etre que <b>mon prochain projet est le vôtre</b> ?
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.CONTACT
                  ),
                  label: PRESTATION_SECTIONS.CONTACT.title,
                  color: COLORS.GROUND,
                },
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES
                  ),
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
                  color: COLORS.GROUND,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.CODE_PHILOSOPHIE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.CODE_PHILOSOPHIE.title,
          }}
          tags={["meta", "motifs", "fluidité"]}
        >
          <>
            <Quote
              displayHeading={4}
              children={
                <p>
                  Le code, ce n'est pas que du code : c'est un organisme vivant.
                </p>
              }
              backgroundColor={COLORS.SUN}
            />
            <p>
              Pour moi, une application est <b>un ecosystème</b> : avec ses
              flux, ses entités, ses <b>noeuds à résoudre</b>.
            </p>
            <p>
              <b>Les motifs</b>, qui sont partout dans le code,
              <b>interagissent ensemble en permanence</b> pour former un
              organisme <b>évolutif</b>.
            </p>
            <p>
              Une <b>bonne conception</b> devient alors juste un{" "}
              <i>langage de motifs</i> qui fonctionne.
            </p>
            <p>
              J'aime avoir des <b>idées</b> autour du développement web.
            </p>
            <p>
              En plus d'un portefeuille de compétences, j'apporte une{" "}
              <b>vision méta du code</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "Plus sur les motifs de conceptions",
                },
                {
                  link: PAGES_DATA[PAGES.BLOG].path,
                  label: "Vers mon blog",
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.PROJETS_PERSONNELS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.PROJETS_PERSONNELS.title,
          }}
          backgroundColor={COLORS.SUN}
          tags={["expériences", "ludique", "pratique"]}
        >
          <>
            <p>
              Je développe régulièrement des <b>outils web</b> pour{" "}
              <b>répondre à des problématiques pratiques</b>.
            </p>
            <p>
              Découvrez quelques POC, exemples édifiants de conception{" "}
              <b>sobre et pratique</b> :
            </p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PERSONNELS.id}_carousel`}
              children={PERSONAL_PROJECTS}
              controlsColor={COLORS.LIGHT}
            />
            <p>
              <b>Coder est un jeu.</b>
            </p>
            <p>
              Allons-nous <b>jouer ensemble</b> ?
            </p>
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.COLLABORATION.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.COLLABORATION.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={["votre projet", "contact", "équipe"]}
        >
          <>
            <p>
              <Link
                to={`${PAGES_DATA[PAGES.PRESTATION].path}#${
                  PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id
                }`}
              >
                Sommes-nous faits pour collaborer
              </Link>{" "}
              ?
            </p>
            <p>
              J'aime les <b>projets qui ont du sens</b>, à la technique bien
              huilée et où ma <b>créativité</b> peut s'exprimer.
            </p>
            <p>
              Vous pourriez aimer mon <b>expertise</b> sur la stack JavaScript
              moderne, mon <b>esprit analytique</b> et ma <b>bonne humeur</b>.
            </p>
            <p>
              PME, start-ups, pôle applicatif ...{" "}
              <b>
                le développement de votre application web a besoin d'un coup de
                pouce
              </b>{" "}
              courte, moyenne ou longue durée ?
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE
                  ),
                  label: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.title,
                  color: COLORS.FLOWER,
                },
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.CONTACT
                  ),
                  label: PRESTATION_SECTIONS.CONTACT.title,
                  color: COLORS.FLOWER,
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
