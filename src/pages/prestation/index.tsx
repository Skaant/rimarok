import { Link } from "gatsby";
import React from "react";
import { ACCUEIL_SECTIONS } from "..";
import RimarokProject from "../../components/accueil/projets-personnels/1-rimarok";
import HighbsBokProject from "../../components/accueil/projets-personnels/2-highbs-bok";
import ImrokProject from "../../components/accueil/projets-personnels/3-imrok";
import TheExpansProject from "../../components/accueil/projets-personnels/4-the-expans";
import PermaDataProject from "../../components/accueil/projets-personnels/5-perma-data";
import PokeTeamProject from "../../components/accueil/projets-personnels/6-poke-team";
import MediartisProject from "../../components/accueil/projets-professionnels/1-mediartis-mobilis-pro";
import CrestJazzProject from "../../components/accueil/projets-professionnels/2-nounours-crest-jazz";
import CasseDuSiecleProject from "../../components/accueil/projets-professionnels/3-happy-teams-casse-du-siecle";
import HygieProject from "../../components/accueil/projets-professionnels/4-hygie";
import OmerProject from "../../components/accueil/projets-professionnels/5-urca-omer";
import TalentsAffinityProject from "../../components/accueil/projets-professionnels/6-fresh-pigments-talents-affinity";
import CdietProject from "../../components/accueil/projets-professionnels/7-winnov-cdiet";
import DcbrainProject from "../../components/accueil/projets-professionnels/8-dcbrain";
import Carousel from "../../components/Carousel";
import PageHeader from "../../components/PageHeader";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import LinksMenu from "../../components/LinksMenu";
import Row from "../../components/Row";
import { COLORS } from "../../data/colors";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import getInternalLink from "../../helpers/getInternalLink";
import Section from "../../types/Section";
import { PRESTATION_ECO_CONCEPTION_SECTIONS } from "./eco-conception";
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./ingenierie-web";

const PAGE_ID = PAGES.PRESTATION;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "intervention-ponctuelle-ou-longue-duree",
    title: "Intervention ponctuelle ou longue durée",
  },
  PERSONNALITE: {
    id: "une-personnalite-d'abord",
    title: "Une personnalité d'abord",
  },
  CONTACT: {
    id: "contact",
    title: "Entrer en contact",
  },
  SAVOIR_FAIRE_ET_TECHNOLOGIES: {
    id: "savoir-faire-et-technologies",
    title: "Savoir-faire et technologies",
  },
  TARIF: {
    id: "un-tarif-unique",
    title: "Un tarif unique",
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
  /** CTAs site */
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
        <PageHeader
          title={title}
          subtitle="La pièce manquante du puzzle"
          backgroundColor={COLORS.LAGOON}
          contents={PRESTATION_SECTIONS}
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
              Je travaille principalement en renfort d'équipes, quelques
              semaines ou quelques mois, pour soutenir le développement de gros
              projets applicatifs.
            </p>
            <p>
              Des petites missions pour ajouter une fonctionnalité ou installer
              un script d'automatisation m'intéressent aussi.
            </p>
            <p>
              Le refactoring et les tests m'attirent beaucoup, car j'aime
              améliorer les choses.
            </p>
            <p>
              J'interviens en <b>full-remote</b>, jusqu'à <b>4 jours/semaine</b>
              sur des projets <b>front, back et full-stack JavaScript</b>.
            </p>
            <p>
              En parallèle de mes compétences techniques, je suis amical et
              communique de façon claire et concise.
            </p>
            <LinksMenu
              links={[
                {
                  link: getInternalLink(PAGES.PRESTATION_INGENIERIE_WEB),
                  label: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].title,
                },
                {
                  link: getInternalLink(PAGES.PRESTATION_ECO_CONCEPTION),
                  label: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].title,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.PERSONNALITE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.PERSONNALITE.title,
          }}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Je suis <b>un individu</b>, pas juste un portefeuille de
              compétences.
            </p>
            <p>
              En plus de mes bientôt huit années de pratique{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS}
                altTitle="professionnelle"
              />{" "}
              et{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PERSONNELS}
                altTitle="personnelle"
              />
              , c'est ma curiosité et ma créativité qui ont forgé mon expertise
              dans le domaine du développement web.
            </p>
            <p>
              J'aime questionner et comprendre, aborder les problématiques
              autrement et chercher des solutions plus simples.
            </p>
            <p>
              Cette recherche s'est fusionné avec mon appétance pour la sobriété
              technologique et, naturellement, l'
              <InternalLink
                page={PAGES.PRESTATION_ECO_CONCEPTION}
                lowercase={true}
              />
              .
            </p>
            <p>
              Enfin, c'est dans des équipes bienveillantes et dynamiques que je
              m'épanouis le plus.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              Full-stack signifie être à l'aise sur{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                section={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK}
                lowercase={true}
              />{" "}
              : front, back et base-de-données.
            </p>
            <p>
              Lors de mes différentes missions j'ai été amené à travailler dans
              des ecosystèmes et avec des frameworks variés, mais mon expertise
              se situe principalement sur les technos suivantes :
            </p>
            <ul>
              <li>JS / Node / TypeScript,</li>
              <li>React,</li>
              <li>SCSS / Bootstrap,</li>
              <li>Express,</li>
              <li>SQL / Mongo,</li>
              <li>GitHub.</li>
            </ul>
            <p>Je me débrouille également bien sur :</p>
            <ul>
              <li>Vue / Angular,</li>
              <li>Nest,</li>
              <li>PHP / Wordpress.</li>
            </ul>
            <p>
              Mais tout ceci ne serait pas grand chose sans une compréhension
              profonde de ce qu'est l'
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                lowercase={true}
              />
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TARIF.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TARIF.title,
          }}
          backgroundColor={COLORS.ABYSS}
        >
          <>
            <p>Une prestation, un tarif :</p>
            <p className="display-1">420€/jour HT</p>
            <p>
              <i>
                Si vous ne pouvez pas récupérer la TVA, je suis exempté en
                Octobre jusqu'à Avril généralement.
              </i>
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.CONTACT.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.CONTACT.title,
          }}
        >
          <>
            <p>Pour discuter ensemble, je vous propose plusieurs solutions :</p>
            <LinksMenu
              links={[
                {
                  link: WEBSITE_DATA.CALENDLY_LINK,
                  label: "Prendre un premier RDV sur Calendly",
                  color: COLORS.SUN,
                },
                {
                  link: "{mail}",
                  label: "M'envoyer un mail sympa",
                  color: COLORS.SUN,
                },
                {
                  link: "{telephone}",
                  label: "Un petit SMS pour vous présenter",
                  color: COLORS.SUN,
                },
                {
                  link: WEBSITE_DATA.LINKEDIN_LINK,
                  label: "Un message sur Lik'dine",
                  color: COLORS.SUN,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.WEB_HOLISTIQUE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.WEB_HOLISTIQUE.title,
          }}
          backgroundColor={COLORS.MIST}
        >
          <>
            <p>
              Le monde est un système dont les éléments sont interreliés et
              interdépendants.
            </p>
            <p>
              Pourquoi concevoir un sous-système qui ne dispose pas des mêmes
              propriétés, ou qui communique mal avec les autres éléments qui
              constituent son environnement ?
            </p>
            <p>Je suis à l'écoute des nouveautés et investigue l'existant.</p>
            <p>
              Combien coûtera le produit à développer est une des premières
              questions à se poser.
            </p>
            <p>
              La réponse ne peut être envisagée sans inclure, en plus de la
              dimension financière, les aspects humains et environnementaux.
            </p>
            <LinksMenu
              links={[
                {
                  link: `${PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION]}#${
                    PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.id
                  }`,
                  label: "Mes valeurs",
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.REALISATIONS.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.REALISATIONS.title,
          }}
        >
          <>
            <p>
              Retrouvez, comme présenté en page d'
              <InternalLink
                page={PAGES.ACCUEIL}
                lowercase={true}
                altTitle="accueil"
              />
              , mes principales réalisations, professionnelles et personnelles :
            </p>
            <Carousel
              id={`${PRESTATION_SECTIONS.REALISATIONS.id}#carousel`}
              children={[
                <MediartisProject />,
                <RimarokProject />,
                <CrestJazzProject />,
                <HighbsBokProject />,
                <TheExpansProject />,
                <CasseDuSiecleProject />,
                <ImrokProject />,
                <HygieProject />,
                <PermaDataProject />,
                <OmerProject />,
                <PokeTeamProject />,
                <DcbrainProject />,
                <CdietProject />,
                <TalentsAffinityProject />,
              ]}
            />
            <p>
              Plus de projets et de stats sur{" "}
              <a href={WEBSITE_DATA.GITHUB_LINK} target="_blank">
                mon profil Github
              </a>
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>Je ne suis pas un défonce-man.</p>
            <p>
              J'aime le travail en cela qu'il est un{" "}
              <b>processus qui m'accomplit</b> et qu'il{" "}
              <b>me connecte aux autres</b>.
            </p>
            <p>
              Votre environnement est sain, vous avez juste la bonne dose de
              stress, votre projet n'était pas à livrer hier ?
            </p>
            <p>
              <b>Je souhaite déjà vous connaître</b> et savoir comment nous
              pourrions <b>travailler ensemble</b>.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.ALLER_PLUS_LOIN.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.ALLER_PLUS_LOIN.title,
          }}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Lorsqu'on pratique longtemps un sujet, des motifs apparaissent et
              cette pratique devient <i>un langage de motifs</i>.
            </p>
            <p>
              En codant, des idées, activables ou juste philosophiques, me
              viennent et j'apprécie les partager.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "En apprendre plus sur les motifs",
                  color: COLORS.WHITE,
                },
                {
                  link: PAGES_DATA[PAGES.BLOG].path,
                  label: "Consulter les articles du blog",
                  color: COLORS.WHITE,
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Prestation;
