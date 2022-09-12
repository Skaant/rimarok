import React from "react";
import { ACCUEIL_SECTIONS } from "..";
import RimarokProject from "../../components/_projects/persos/1-rimarok";
import HighbsBokProject from "../../components/_projects/persos/2-highbs-bok";
import ImrokProject from "../../components/_projects/persos/3-imrok";
import TheExpansProject from "../../components/_projects/persos/4-the-expans";
import MotifsJsProject from "../../components/_projects/persos/5-motifs-js";
import PermaDataProject from "../../components/_projects/persos/6-perma-data";
import PokeTeamProject from "../../components/_projects/persos/7-poke-team";
import MediartisProject from "../../components/_projects/pros/1-mediartis-mobilis-pro";
import CrestJazzProject from "../../components/_projects/pros/2-nounours-crest-jazz";
import CasseDuSiecleProject from "../../components/_projects/pros/3-happy-teams-casse-du-siecle";
import HygieProject from "../../components/_projects/pros/4-hygie";
import OmerProject from "../../components/_projects/pros/5-urca-omer";
import TalentsAffinityProject from "../../components/_projects/pros/6-fresh-pigments-talents-affinity";
import CdietProject from "../../components/_projects/pros/7-winnov-cdiet";
import DcbrainProject from "../../components/_projects/pros/8-dcbrain";
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
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./ingenierie-web";
import getPageName from "../../helpers/getPageName";

const PAGE_ID = PAGES.PRESTATION;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_SECTIONS: { [key: string]: Section } = {
  SAVOIR_FAIRE_ET_TECHNOLOGIES: {
    id: "savoir-faire-et-technologies",
    title: "Savoir-faire et technologies",
  },
  INTERVENTION: {
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
  TARIF: {
    id: "un-tarif-unique",
    title: "Un tarif unique",
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
    id: "plus-loin-sur-le-code",
    title: "Plus loin sur le code",
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
          backgroundColor={COLORS.LIGHT}
          linksMenu={{
            links: [
              PAGES.PRESTATION_INGENIERIE_WEB,
              PAGES.PRESTATION_ECO_CONCEPTION,
            ].map((page, index) => ({
              link: getInternalLink(page),
              label: getPageName(page),
              color: index ? COLORS.SUN : COLORS.LAGOON,
            })),
          }}
          tableOfContents={{
            contents: PRESTATION_SECTIONS,
            linkColor: COLORS.DARK,
          }}
        />
        <Row
          id={PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.SAVOIR_FAIRE_ET_TECHNOLOGIES.title,
          }}
          backgroundColor={COLORS.LAGOON}
          tags={["expertise", "full-stack", "typescript", "react"]}
        >
          <>
            <p>
              Full-stack signifie être à l'aise sur{" "}
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                section={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK}
                lowercase={true}
              />{" "}
              : front, back et base de données.
            </p>
            <p>
              Lors de mes missions, j'ai été amené à travailler dans des
              <b>ecosystèmes</b> et avec des <b>frameworks variés</b>.
            </p>
            <p>
              <b>
                mon expertise se situe principalement sur les technos suivantes
              </b>{" "}
              :
            </p>
            <ul>
              <li>
                JS / Node / <b>TypeScript</b>,
              </li>
              <li>
                <b>React</b>,
              </li>
              <li>
                SCSS / <b>Bootstrap</b>,
              </li>
              <li>Express,</li>
              <li>SQL / Mongo,</li>
              <li>
                <b>GitHub</b>.
              </li>
            </ul>
            <p>J'ai également une certaine expérience sur :</p>
            <ul>
              <li>Vue / Angular,</li>
              <li>Nest,</li>
              <li>PHP / Wordpress.</li>
            </ul>
            <p>
              Tout ceci ne serait pas grand chose sans{" "}
              <b>une compréhension profonde</b> de ce qu'est l'
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                lowercase={true}
              />
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.INTERVENTION.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.INTERVENTION.title,
          }}
          tags={["mission", "contexte", "modalités", "fréquence"]}
          backgroundColor={COLORS.LIGHT}
        >
          <>
            <p>
              Je travaille principalement{" "}
              <b>en renfort d'équipes, quelques semaines ou quelques mois</b>,
              pour <b>soutenir le développement de gros projets applicatifs</b>.
            </p>
            <p>
              <b>Des petites missions</b> pour ajouter une fonctionnalité ou
              installer un script d'automatisation <b>m'intéressent aussi</b>.
            </p>
            <p>
              <b>Le refactoring et les tests</b> m'attirent et j'aime{" "}
              <b>améliorer les choses</b>.
            </p>
            <p>
              J'interviens en <b>100% télétravail</b>, jusqu'à{" "}
              <b>4 jours/semaine</b> sur des projets{" "}
              <b>front, back et full-stack JavaScript</b>.
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
          tags={["humain", "curieux", "travail d'équipe"]}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Je suis <b>un individu</b>, pas juste un portefeuille de
              compétences.
            </p>
            <p>
              En plus de mes bientôt <b>huit années de pratique</b>{" "}
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
              , c'est ma <b>curiosité</b> et ma <b>créativité</b> qui ont
              faconnées mon <b>expertise</b>
              dans le domaine du <b>développement web</b>.
            </p>
            <p>
              J'aime <b>questionner et comprendre</b>, aborder les
              problématiques autrement et{" "}
              <b>trouver des solutions plus simples</b>.
            </p>
            <p>
              Cette recherche a fusionné avec mon appétance pour la{" "}
              <b>sobriété technologique et cognitive</b>, ainsi que l'
              <InternalLink
                page={PAGES.PRESTATION_ECO_CONCEPTION}
                lowercase={true}
              />
              .
            </p>
            <p>
              Enfin, c'est dans des <b>équipes bienveillantes et dynamiques</b>{" "}
              que je m'épanouis le plus.
            </p>
            <LinksMenu
              links={[
                {
                  link: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.id,
                  label: PRESTATION_SECTIONS.TRAVAILLER_ENSEMBLE.title,
                  color: COLORS.MIST,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.TARIF.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.TARIF.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={["mission", "rémunération"]}
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
          backgroundColor={COLORS.FLOWER}
          tags={["calendly", "mail", "sms", "linkedin"]}
        >
          <>
            <p>
              Pour <b>discuter ensemble</b>, je vous propose{" "}
              <b>plusieurs solutions</b> :
            </p>
            <LinksMenu
              links={[
                {
                  link: WEBSITE_DATA.CALENDLY_LINK,
                  label: "Prendre un premier RDV sur Calendly",
                  color: COLORS.ABYSS,
                },
                {
                  link: "#",
                  label: "M'envoyer un mail sympa",
                  color: COLORS.ABYSS,
                },
                {
                  link: "#",
                  label: "Un petit SMS pour vous présenter",
                  color: COLORS.ABYSS,
                },
                {
                  link: WEBSITE_DATA.LINKEDIN_LINK,
                  label: "Un message sur Lik'dine",
                  color: COLORS.ABYSS,
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
          backgroundColor={COLORS.LIGHT}
          tags={["expériences", "professionnel", "personnel"]}
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
              id={`${PRESTATION_SECTIONS.REALISATIONS.id}_carousel`}
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
                <MotifsJsProject />,
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
          backgroundColor={COLORS.LAGOON}
          tags={["votre environnement", "compatibilité"]}
        >
          <>
            <p>
              Je ne suis <b>pas</b> un défonce-man.
            </p>
            <p>
              J'aime <b>le travail</b> en cela qu'il est un{" "}
              <b>processus qui m'accomplit</b> et qu'il <b>me connecte</b> aux
              autres.
            </p>
            <p>
              <b>Votre environnement est sain</b>, vous avez juste la bonne dose
              de stress, vous prenez des vacances et votre projet n'était pas à
              livrer hier ?
            </p>
            <p>
              <b>Je souhaite déjà vous connaître</b> et savoir comment nous
              pourrions <b>collaborer</b> :)
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_SECTIONS.ALLER_PLUS_LOIN.id}
          header={{
            level: 2,
            content: PRESTATION_SECTIONS.ALLER_PLUS_LOIN.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={["meta", "motifs", "blog"]}
        >
          <>
            <p>
              Lorsque je <b>pratique longtemps</b> un sujet,{" "}
              <b>des motifs apparaissent</b> et pratiquer devient{" "}
              <i>un langage de motifs</i>.
            </p>
            <p>
              <b>En codant, des idées</b>, activables ou juste philosophiques,{" "}
              <b>me viennent</b> et j'apprécie les <b>partager</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: PAGES_DATA[PAGES.MOTIFS].path,
                  label: "En apprendre plus sur les motifs",
                  color: COLORS.FLOWER,
                },
                {
                  link: PAGES_DATA[PAGES.BLOG].path,
                  label: "Consulter les articles du blog",
                  color: COLORS.FLOWER,
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
