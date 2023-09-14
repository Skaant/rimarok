import React from "react";
import { ACCUEIL_SECTIONS } from "./accueil.template";
import RimarokProject from "../../components/_projects/persos/1-rimarok";
import HighbsBokProject from "../../components/_projects/persos/2-highbs-bok";
import ImrokProject from "../../components/_projects/persos/3-imrok";
import TheExpansProject from "../../components/_projects/persos/4-the-expans";
import MotifsJsProject from "../../components/_projects/persos/5-motifs-js";
import PermaDataProject from "../../components/_projects/persos/6-perma-data";
import PokeTeamProject from "../../components/_projects/persos/7-poke-team";
import MediartisProject from "../../components/_projects/pros/8-mediartis-mobilis-pro";
import CrestJazzProject from "../../components/_projects/pros/7-nounours-crest-jazz";
import CasseDuSiecleProject from "../../components/_projects/pros/6-happy-teams-casse-du-siecle";
import HygieProject from "../../components/_projects/pros/5-hygie";
import OmerProject from "../../components/_projects/pros/4-urca-omer";
import TalentsAffinityProject from "../../components/_projects/pros/3-fresh-pigments-talents-affinity";
import CdietProject from "../../components/_projects/pros/2-winnov-cdiet";
import DcbrainProject from "../../components/_projects/pros/1-dcbrain";
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
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./prestation/ingenierie-web.template";
import getPageName from "../../helpers/getPageName";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../types/GlobalPageContext";
import "../../styles/pages/prestation.scss";

const PAGE = PAGES.PRESTATION;
const { title } = PAGES_DATA[PAGE];

export const PRESTATION_SECTIONS: { [key: string]: Section } = {
  SAVOIR_FAIRE_ET_TECHNOLOGIES: {
    id: "savoir-faire-et-expertise-full-stack",
    title: "Savoir-faire et expertise full-stack",
  },
  INTERVENTION: {
    id: "interventions-ponctuelles-ou-longue-duree",
    title: "Interventions ponctuelles ou longue durée",
  },
  PERSONNALITE: {
    id: "un-humain-avant-tout",
    title: "Un humain avant tout",
  },
  CONTACT: {
    id: "entrer-en-contact",
    title: "Entrer en contact",
  },
  TARIF: {
    id: "mon-tarif",
    title: "Mon tarif",
  },
  REALISATIONS: {
    id: "toutes-mes-realisations",
    title: "Toutes mes réalisations",
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

function Prestation({ pageContext }: PageProps<undefined, GlobalPageContext>) {
  return (
    <Layout
      id={PAGES_DATA[PAGE].id}
      head={{
        title,
        description:
          "Je travaille en régie pour les gros projets applicatifs, ou au forfait pour de très courtes missions. Mon expertise est la full-stack et mes technos de prédilection sont TypeScript, React, Node et Gatsby. Toutefois, ma plus grande force est mon adaptabilité.",
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={"Mon expertise en développement web full-stack"}
          subtitle="Étendre. Connecter. Améliorer."
          backgroundColor={COLORS.LIGHT}
          linksMenu={{
            links: [
              PAGES.PRESTATION_INGENIERIE_WEB,
              PAGES.PRESTATION_ECO_CONCEPTION,
            ].map((page, index) => ({
              link: getInternalLink(page),
              label: getPageName(page),
              color: index ? COLORS.ABYSS : COLORS.SUN,
            })),
          }}
          tableOfContents={{
            contents: PRESTATION_SECTIONS,
            linkColor: COLORS.DARK,
          }}
        />
        <div className="position-relative w-100">
          <img
            src="/prestation-right.svg"
            className="position-absolute"
            alt="L'élément de droite de l'illustration de la page développement web freelance, des personnages en train de donner forme à un programme symbolisé par des formes fluides et abstraites."
            loading="lazy"
          />
        </div>
        <div
          className="position-relative"
          style={{
            maxWidth: "50vw",
          }}
        >
          <img
            src="/prestation-left.svg"
            className="position-absolute"
            alt="L'élément de gauche de l'illustration de la page développement web freelance, un personnage manipulant un tableau de bord symbolisé par un soleil à plusieurs options."
            loading="lazy"
            style={{
              bottom: 0,
              left: 0,
              maxHeight: "calc(36vw + 24vh)",
              zIndex: 1,
            }}
          />
        </div>
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
            <p className="display-6">
              Depuis 2016, je suis{" "}
              <b>embauché pour compléter des équipes de développement</b> ou des{" "}
              <b>petites entreprises</b> sur des{" "}
              <b>projets de sites et applications web</b> variés.
            </p>
            <p>Durant toutes ces missions, j'ai été amené :</p>
            <ul>
              <li>
                à travailler sur des <b>ecosystèmes</b> et avec des{" "}
                <b>frameworks variés</b>,
              </li>
              <li>
                à développer en conséquence une <b>vision globale</b> et une
                grande <b>adaptabilité</b>.
              </li>
            </ul>
            <p>
              Pour moi, <b>être développeur web</b> aujourd'hui nécessite d'être
              à l'aise sur{" "}
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                section={PRESTATION_INGENIERIE_WEB_SECTIONS.FULL_STACK}
                lowercase={true}
              />{" "}
              : front, back et base de données.
            </p>
            <p className="display-6">
              Aujourd'hui,{" "}
              <b>mon expertise se focalise sur les technos suivantes</b> :
            </p>
            <ul>
              <li>
                JS / Node / <b>TypeScript</b>,
              </li>
              <li>
                <b>React</b>,
              </li>
              <li>
                <b>Gatsby</b>,
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
            <p>
              J'ai également une <b>certaine expérience</b> sur :
            </p>
            <ul>
              <li>Vue / Angular,</li>
              <li>Nest,</li>
              <li>PHP / Wordpress.</li>
            </ul>
            <p>
              Mais tout ceci ne serait pas grand chose sans{" "}
              <b>une compréhension profonde</b> de ce qu'est la{" "}
              <InternalLink
                page={PAGES.PRESTATION_INGENIERIE_WEB}
                altTitle="full-stack TypeScript"
                lowercase={true}
              />
              .
            </p>
            <LinksMenu
              links={[
                {
                  label: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].title,
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                  color: COLORS.LIGHT,
                },
              ]}
            />
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
              <b>Le refactoring et les tests</b> m'attirent car j'aime{" "}
              <b>améliorer les choses</b>.
            </p>
            <p className="display-6">
              J'interviens en <b>100% télétravail*</b>, jusqu'à{" "}
              <b>4 jours/semaine</b> sur des projets{" "}
              <b>front, back et full-stack JavaScript</b>.
            </p>
            <p className="small">
              *Possibilité de déplacements <b>ponctuels et rémunérés</b> à
              Grenoble, Chambéry et Lyon.
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
            <p className="display-6">
              Je suis <b>un individu</b>, pas juste un portefeuille de
              compétences.
            </p>
            <p>
              En plus de mes bientôt <b>huit années de pratiques</b>{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PROFESSIONNELS}
                altTitle="professionnelle"
              />{" "}
              et{" "}
              <InternalLink
                page={PAGES.ACCUEIL}
                section={ACCUEIL_SECTIONS.PROJETS_PERSOS}
                altTitle="personnelle"
              />
              , c'est ma <b>curiosité</b> et ma <b>créativité</b> qui ont
              dirigées mon <b>expertise dans le domaine du développement web</b>
              .
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
            <p className="display-6">
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
          tags={["mission", "rémunération", "dégressif"]}
        >
          <>
            <p>
              Au premier Janvier 2023, je <b>facture mon intervention</b> :
            </p>
            <p className="display-1">470€/jour HT</p>
            <p>
              Pour des <b>missions m'occupant plus de 10 jours/mois</b>, mon
              tarif passe à <b>420€/jour HT</b>.
            </p>
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
                  id: "contact-mail",
                },
                {
                  link: "#",
                  label: "Un petit SMS pour vous présenter",
                  color: COLORS.ABYSS,
                  id: "contact-phone",
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
      </>
    </Layout>
  );
}

export default Prestation;
