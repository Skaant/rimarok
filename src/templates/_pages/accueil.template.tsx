import * as React from "react";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import "../../styles/global.scss";
import Quote from "../../components/Quote";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Carousel from "../../components/Carousel";
import LinksMenu, { LinksMenuItem } from "../../components/LinksMenu";
import Row from "../../components/Row";
import { COLORS } from "../../data/colors";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "./prestation.template";
import { Link, PageProps } from "gatsby";
import getInternalLink from "../../helpers/getInternalLink";
import { PERSONAL_PROJECTS } from "../../components/_projects/persos";
import { PROFESSIONAL_PROJECTS } from "../../components/_projects/pros";
import { GlobalPageContext } from "../../types/GlobalPageContext";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "developpement-web-full-stack-remote-grenoble-chambery-lyon",
    title:
      "Développement web full-stack remote, ou sur Grenoble, Chambéry, Lyon",
  },
  MOTIVATIONS: {
    id: "motivations-performances-et-economies",
    title: "Mes motivations : performances et économies",
  },
  STACK: {
    id: "react-node-database-typescript-php-ecologogiques",
    title: "React, Node, Database, TypeScript, PHP ... écologiques",
  },
  PROJETS_PROFESSIONNELS: {
    id: "projets-professionnels",
    title: "Projets profesionnels",
  },
  CODE_PHILOSOPHIE: {
    id: "le-code-une-philosophie",
    title: "Le code, une philosophie",
  },
  PROJETS_PERSOS: {
    id: "projets-persos",
    title: "Projets persos",
  },
  COLLABORATION: {
    id: "vers-une-collaboration-future",
    title: "Vers une collaboration future",
  },
};

const Accueil = ({ pageContext }: PageProps<undefined, GlobalPageContext>) => {
  return (
    <Layout
      head={{
        title,
      }}
      {...pageContext}
    >
      <>
        <div
          className="d-flex justify-content-end bg-flower"
          style={{
            paddingTop: "6rem",
            marginBottom: "-16vh",
            maxHeight: "80vh",
            paddingRight: "calc(-100px + 22vw)",
          }}
        >
          <img
            src="/rimarok.svg"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <PageHeader
          title={
            "Developpeur web TypeScript/JavaScript freelance et éco-conception"
          }
          subtitle={title}
          backgroundColor={COLORS.FLOWER}
          titleSize={"big"}
          linksMenu={{
            links: Object.entries(PAGES_DATA)
              .filter(
                ([key]) =>
                  ![
                    PAGES.ACCUEIL,
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
          id={ACCUEIL_SECTIONS.INTRO_SITE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_SITE.title,
          }}
          tags={["dev web", "full-stack", "indépendant", "chartreuse"]}
        >
          <>
            <p>
              Salut ! Je m'appelle <b>Romaric Ruga</b> et vous êtes sur mon{" "}
              <b>site professionnel</b> de <b>développeur web freelance</b>.
            </p>
            <p>
              Je travaille en <b>renfort d'équipe</b> sur des{" "}
              <b>projets applicatifs</b> de toutes tailles dans des <b>PME</b>,{" "}
              <b>startups</b>, <b>collectivités</b> et/ou avec des{" "}
              <b>auto-entrepreneurs</b>.
            </p>
            <p></p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                  label: "Ma prestation",
                  color: COLORS.LAGOON,
                },
                {
                  link: `/#${ACCUEIL_SECTIONS.MOTIVATIONS.id}`,
                  label: "Mes motivations",
                },
                {
                  link: `/#${ACCUEIL_SECTIONS.STACK.id}`,
                  label: "Ma stack",
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.MOTIVATIONS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.MOTIVATIONS.title,
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
          id={ACCUEIL_SECTIONS.STACK.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.STACK.title,
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
                  color: COLORS.LIGHT,
                },
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES
                  ),
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
                  color: COLORS.LIGHT,
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
          id={ACCUEIL_SECTIONS.PROJETS_PERSOS.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.PROJETS_PERSOS.title,
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
              id={`${ACCUEIL_SECTIONS.PROJETS_PERSOS.id}_carousel`}
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
