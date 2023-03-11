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
import "../../styles/pages/accueil.scss";
import InternalLink from "../../components/InternalLink";
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./prestation/ingenierie-web.template";

const PAGE = PAGES.ACCUEIL;
const { title } = PAGES_DATA[PAGE];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "developpement-web-full-stack-remote-grenoble-chambery-lyon",
    title: "Développement web full-stack remote / Grenoble / Chambéry / Lyon",
  },
  MOTIVATIONS: {
    id: "motivations-performances-economies-ecologie",
    title: "Mes motivations : performances, économies, écologie",
  },
  STACK: {
    id: "typescript-react-node-database-php-ecologogiques",
    title: "TypeScript, React, Node, Database,  PHP ... écologiques",
  },
  PROJETS_PROFESSIONNELS: {
    id: "projets-professionnels-startups-pme-solopreneurs-institutions-publiques",
    title:
      "Projets profesionnels (startups, PME, solopreneurs, institutions publiques)",
  },
  CODE_PHILOSOPHIE: {
    id: "le-code-un-langage-fait-de-motifs-de-conception",
    title: "Le code, un langage fait de motifs de conception",
  },
  PROJETS_PERSOS: {
    id: "projets-personnels-passion-experimentation",
    title: "Projets personnels : passion, expérimentation",
  },
  COLLABORATION: {
    id: "travailler-ensemble-vers-une-collaboration-future",
    title: "Travailler ensemble : vers une collaboration future",
  },
};

const Accueil = ({ pageContext }: PageProps<undefined, GlobalPageContext>) => {
  return (
    <Layout
      id={PAGES_DATA[PAGE].id}
      head={{
        title,
        description:
          "Développeur web indépendant depuis 7 ans, je suis spécialisé dans la full-stack JS/TS et PHP, avec une sensibilité à l'éco-conception. J'interviens auprès de petites entreprises, start-ups et institutions pour compléter leurs équipes et accéler leurs projets.",
      }}
      {...pageContext}
    >
      <>
        <div
          id="top-illustration"
          className="position-absolute w-100 d-flex justify-content-center"
        >
          <img
            src="/rimarok.svg"
            alt="L'illustration de la page d'accueil représente un morceau d'espace étoilé d'où jailli le logo du site, symbolisant le passage et le formattage des idées, sur un soleil rouge."
            loading="lazy"
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
            <p className="display-6">
              Je travaille en <b>renfort d'équipe</b> sur des{" "}
              <b>projets applicatifs</b> de toutes tailles dans des <b>PME</b>,{" "}
              <b>startups</b>, <b>collectivités</b> et/ou avec des{" "}
              <b>auto-entrepreneurs</b>, depuis <b>plus de 7 ans</b>.
            </p>
            <p>
              Vous <b>cherchez quelqu'un</b> pour donner un <b>coup de boost</b>{" "}
              à vos <b>applications</b> ou <b>sites internet</b> ?
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                  label: "Découvrez ma prestation",
                },
                {
                  link: `/#${ACCUEIL_SECTIONS.MOTIVATIONS.id}`,
                  label: "Mes motivations",
                  color: COLORS.ABYSS,
                },
                {
                  link: `/#${ACCUEIL_SECTIONS.STACK.id}`,
                  label: "Ma stack",
                  color: COLORS.ABYSS,
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
          tags={["optimisation", "expertise", "éthique", "sobriété"]}
        >
          <>
            <Quote displayHeading={5}>
              <>
                Je veux utiliser Internet pour créer des solutions à des
                problématiques de la vie courante, tout en réduisant ses impacts
                négatifs sur la planète.
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
              (y compris humaines).
            </p>
            <p className="display-6">
              Pourtant, <b>la croissance de ces coûts devrait être endiguée</b>.
            </p>
            <p>
              C'est tout l'enjeu de l'<b>éco-conception</b> et de la sobriété
              numérique.
            </p>
            <LinksMenu
              links={[
                {
                  label: "Plus sur l'éco-conception",
                  link: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path,
                  color: COLORS.MIST,
                },
              ]}
            />
          </>
        </Row>
        <Row
          header={{
            level: 3,
            content: "Nouvelles fonctionnalités et/ou refactoring optimisés",
          }}
          backgroundColor={COLORS.SUN}
          className={"pt-0"}
          stars={true}
          collapsible={true}
        >
          <>
            <p>
              Mon intervention en ingénierie web permet d'
              <b>étendre le périmètre fonctionnel de vos applications</b>, tout
              en <b>limitant les "prises de poids" logicielles</b>.
            </p>
            <p>
              Les programmes conservent des <b>performances optimisées</b>, sans
              être plus coûteux.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                  label: "Plus sur l'ingénierie web",
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
              Spécialisé dans la <b>full-stack JavaScript</b>{" "}
              <i>
                (TypeScript, Node, React, Express, Jest, Nest, Vue, Angular ...)
              </i>
              , je mets également en oeuvre des{" "}
              <b>bonnes pratiques d'éco-conception logicielle</b>.
            </p>
            <p>
              C'est pendant mes études que j'ai été sensibilisé au sujet du{" "}
              <b>Green-IT</b>.
            </p>
            <p>
              Diplomé d'un{" "}
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                section={PRESTATION_INGENIERIE_WEB_SECTIONS.UNIVERSITE}
                altTitle="Master MIAGE option énergie"
              />{" "}
              en 2016, j'exerce depuis l'activité de{" "}
              <b>développeur web en tant qu'indépendant</b>.
            </p>
            <p className="display-6">
              Au croisement de l'ingénierie et de l'éco-conception logicielles
              apparaît une <b>puissante efficience</b>, qui{" "}
              <b>accélère les applications</b> et <b>réduit les dépenses</b> .
            </p>
            <LinksMenu
              links={[
                {
                  label: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].title,
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                },
                {
                  label: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].title,
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
            <p className="display-6">
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
            <p className="display-6">
              <b>Les motifs de conception (design patterns)</b>, qui sont
              partout dans le code, <b>interagissent ensemble en permanence</b>{" "}
              pour former un organisme <b>évolutif</b>.
            </p>
            <p>
              Une <b>bonne conception</b> devient alors juste un{" "}
              <i>langage de motifs</i> qui fonctionne.
            </p>
            <p>
              J'aime aussi beaucoup{" "}
              <b>réfléchir et me questionner autour du développement web</b>.
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
              <b>répondre à des problématiques concrètes</b> et{" "}
              <b>découvrir de nouvelles technos</b>.
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
            <p className="display-6">
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
            <p className="display-6">
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
