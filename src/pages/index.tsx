import * as React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import Carousel from "../components/Carousel";
import LinksMenu from "../components/LinksMenu";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import Section from "../types/Section";
import TableOfContents from "../components/TableOfContents";
import { PRESTATION_SECTIONS } from "./prestation";
import { Link } from "gatsby";
import MediartisProject from "../components/accueil/projets-professionnels/1-mediartis-mobilis-pro";
import CrestJazzProject from "../components/accueil/projets-professionnels/2-nounours-crest-jazz";
import CasseDuSiecleProject from "../components/accueil/projets-professionnels/3-happy-teams-casse-du-siecle";
import HygieProject from "../components/accueil/projets-professionnels/4-hygie";
import OmerProject from "../components/accueil/projets-professionnels/5-urca-omer";
import TalentsAffinityProject from "../components/accueil/projets-professionnels/6-fresh-pigments-talents-affinity";
import CdietProject from "../components/accueil/projets-professionnels/7-winnov-cdiet";
import DcbrainProject from "../components/accueil/projets-professionnels/8-dcbrain";
import RimarokProject from "../components/accueil/projets-personnels/1-rimarok";
import HighbsBokProject from "../components/accueil/projets-personnels/2-highbs-bok";
import ImrokProject from "../components/accueil/projets-personnels/3-imrok";
import getInternalLink from "../helpers/getInternalLink";
import TheExpansProject from "../components/accueil/projets-personnels/4-the-expans";
import InternalLink from "../components/InternalLink";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "economies-et-performance",
    title: "Économies et performance",
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
                  ![PAGES.ACCUEIL, PAGES.MENTIONS_LEGALES].includes(
                    key as PAGES
                  )
              )
              .map(([key, { path, title }]) => ({
                link: path,
                label: title,
                color: [
                  PAGES.PRESTATION_INGENIERIE_WEB,
                  PAGES.PRESTATION_ECO_CONCEPTION,
                ].includes(key as PAGES)
                  ? COLORS.MIST
                  : COLORS.WHITE,
              })),
          }}
          tableOfContents={{
            contents: ACCUEIL_SECTIONS,
            linkColor: COLORS.LIGHT_SUN,
          }}
        />
        <Row
          header={{
            level: 2,
            content: "Accueil",
          }}
          backgroundColor={COLORS.GREEVE}
        >
          <>
            <p>
              Bonjour, je m'appelle <b>Romaric Ruga</b> et vous êtes sur mon
              site <b>professionnel de développement web</b>.
            </p>
            <p>
              Laissez-moi vous{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                altTitle={"présenter ma prestation"}
              />{" "}
              ainsi que <b>ma vision sur l'informatique</b>.
            </p>
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.INTRO_SITE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_SITE.title,
          }}
          backgroundColor={COLORS.DARK_GREEVE}
        >
          <>
            <Quote displayHeading={4}>
              <>
                Internet devrait servir à résoudre des problèmes, pas en créer
                de nouveaux.
              </>
            </Quote>
            <p>
              Les usages de l'informatique créent des{" "}
              <b>besoins exponentiels</b> en infrastructure matérielle et en
              puissance de calcul.
            </p>
            <p>
              Même au sein d'un projet applicatif, l'ajout de nouvelles
              fonctionnalités multiplie la consommation de ressources (y compris
              humaine !) au lieu de le réduire par abstraction.
            </p>
            <p>
              Pourtant, une partie de{" "}
              <b>cette croissance pourrait être endiguée</b>.
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
          backgroundColor={COLORS.LIGHT_SUN}
        >
          <>
            <p>
              Diplomé d'un <b>Master MIAGE</b> en 2016, j'exerce depuis
              l'activité de <b>développeur web en tant qu'indépendant</b>.
            </p>
            <p>
              Spécialisé dans la <b>full-stack JavaScript</b> (TypeScript, Node,
              React, Express, Jest mais aussi Nest, Vue, Angular ...), j'ai
              également développé ma sensibilité à l'
              <b>éco-conception logicielle</b>.
            </p>
            <p>
              Au croisement de ces deux sujets apparaît une puissante
              efficience, qui accélère les applications et réduit les dépenses .
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
          backgroundColor={COLORS.ABYSS}
          colClassName="text-white"
        >
          <>
            <p>
              Au long de ma carrière, j'ai privilégié la diversité des
              contextes, sans perdre de vue la stack JavaScript.
            </p>
            <p>Voici une sélection de mes expériences les plus pertinentes :</p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS.id}_carousel`}
              controlsColor={COLORS.WHITE}
              children={[
                <MediartisProject />,
                <CrestJazzProject />,
                <CasseDuSiecleProject />,
                <HygieProject />,
                <OmerProject />,
                <TalentsAffinityProject />,
                <CdietProject />,
                <DcbrainProject />,
              ]}
            />
            <LinksMenu
              links={[
                {
                  link: `${PAGES_DATA[PAGES.PRESTATION].path}#${
                    PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.id
                  }`,
                  label: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
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
          backgroundColor={COLORS.LAGOON}
        >
          <>
            <Quote
              displayHeading={4}
              children={<p>Le code, ce n'est pas que du code.</p>}
            />
            <p>
              Pour moi, une application est <b>un ecosystème</b> : avec ses
              flux, ses entités, ses <b>noeuds à résoudre</b>.
            </p>
            <p>
              De plus, <b>les motifs sont partout dans le code</b>.
            </p>
            <p>
              Une <b>bonne conception</b> devient alors juste un{" "}
              <i>langage de motifs</i> qui fonctionne.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "Plus sur les motifs de conceptions",
                },
              ]}
            />
            <p>
              J'aime avoir des <b>idées</b> autour du développement web.
            </p>
            <p>
              Ainsi plus qu'un portefeuille de compétences, j'apporte une{" "}
              <b>vision méta du code</b>.
            </p>
            <LinksMenu
              links={[
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
          backgroundColor={COLORS.MIST}
        >
          <>
            <p>
              Je développe régulièrement des <b>outils informatiques</b> pour{" "}
              <b>répondre à mes problématiques</b> du monde matériel.
            </p>
            <p>
              Découvrez quelques POC, exemples édifiants de conception
              <b>sobre et pratique</b> :
            </p>
            <Carousel
              id={`${ACCUEIL_SECTIONS.PROJETS_PERSONNELS.id}_carousel`}
              children={[
                <RimarokProject />,
                <HighbsBokProject />,
                <ImrokProject />,
                <TheExpansProject />,
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.COLLABORATION.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.COLLABORATION.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              Sommes-nous faits pour{" "}
              <Link
                to={`${PAGES_DATA[PAGES.PRESTATION].path}#${
                  PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id
                }`}
              >
                travailler ensemble
              </Link>
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
                le développement de votre application JavaScript a besoin d'un
                coup de pouce
              </b>
              quelques semaines ou quelques mois ?
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(
                    PAGES.PRESTATION,
                    PRESTATION_SECTIONS.CONTACT
                  ),
                  label: PRESTATION_SECTIONS.CONTACT.title,
                  color: COLORS.WHITE,
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
