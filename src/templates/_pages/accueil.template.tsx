import * as React from "react";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import "../../styles/global.scss";
import Quote from "../../components/Quote";
import { PAGES, PAGES_DATA } from "../../data/pages";
import LinksMenu from "../../components/LinksMenu";
import Row from "../../components/Row";
import { COLORS } from "../../data/colors";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "./prestation.template";
import { PageProps } from "gatsby";
import getInternalLink from "../../helpers/getInternalLink";
import { GlobalPageContext } from "../../types/GlobalPageContext";
import "../../styles/pages/accueil.scss";
import InternalLink from "../../components/InternalLink";
import { PRESTATION_INGENIERIE_WEB_SECTIONS } from "./prestation/ingenierie-web.template";
import WEBSITE_DATA from "../../data/website";

const PAGE = PAGES.ACCUEIL;
const { title } = PAGES_DATA[PAGE];

export const ACCUEIL_SECTIONS: { [key: string]: Section } = {
  INTRO_SITE: {
    id: "mon-fonctionnement",
    title: "Mon fonctionnement",
  },
  STACK: {
    id: "un-expert-de-la-full-stack-javascript",
    title: "Un expert de la full-stack JavaScript",
  },
  MOTIVATIONS: {
    id: "les-benefices-de-l-eco-conception-web",
    title: "Les bénéfices de l'éco-conception web",
  },
  CODE_PHILOSOPHIE: {
    id: "design-patterns-une-comprehension-globale-du-code",
    title: "Design patterns : une compréhension globale du code",
  },
  COLLABORATION: {
    id: "travailler-ensemble",
    title: "Travailler ensemble",
  },
  CONTACT: {
    id: "entrer-en-contact",
    title: "Entrer en contact",
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
          title={"Developpeur web freelance et éco-conception"}
          subtitle={title}
          backgroundColor={COLORS.FLOWER}
          titleSize={"big"}
          linksMenu={{
            links: [
              {
                label: "Suivez-moi !",
                link: `#${ACCUEIL_SECTIONS.INTRO_SITE.id}`,
                color: COLORS.ABYSS,
              },
            ],
          }}
        />
        <Row
          id={ACCUEIL_SECTIONS.INTRO_SITE.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.INTRO_SITE.title,
          }}
        >
          <>
            <p>
              Salut, je m'appelle Romaric Ruga et vous êtes sur mon site
              professionnel de développeur web full-stack freelance.
            </p>
            <p>
              <b>Je travaille en renfort d'équipe</b> sur des projets
              applicatifs de toutes tailles dans des PME, startups,
              collectivités et/ou avec des auto-entrepreneurs, depuis plus de 7
              ans.{" "}
              <b>
                J'exerce mon activité en remote, ou ponctuellement sur les
                villes de Grenoble, Chambéry, Voiron ou Lyon.
              </b>
            </p>
            <p>
              Vous cherchez quelqu'un pour donner un coup de boost à vos
              applications ou sites internet ?
            </p>
            <LinksMenu
              links={[
                {
                  link: `#${ACCUEIL_SECTIONS.STACK.id}`,
                  label: "Découvrir mon expertise full-stack",
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
          backgroundColor={COLORS.MIST}
        >
          <>
            <p>
              Je suis spécialisé dans les technologies <b>JavaScript et PHP</b>{" "}
              : TypeScript, Node, React, Express, Jest, Nest, Vue, Svelte,
              WordPress. <b>Du front, du back, de la base de données.</b> Je
              mets également en oeuvre des bonnes pratiques d'éco-conception
              logicielle.
            </p>
            <p>
              C'est pendant mes études que j'ai été sensibilisé au sujet du{" "}
              <b>Green-IT</b>. Diplomé d'un Master MIAGE option énergie en 2016,
              j'exerce depuis l'activité de développeur web en tant
              qu'indépendant.
            </p>
          </>
        </Row>
        <Row
          header={{
            level: 3,
            content: "Ajouter ou améliorer des fonctionnalités",
          }}
          backgroundColor={COLORS.MIST}
          className={"pt-0"}
          stars={true}
        >
          <>
            <p>
              Mon intervention en ingénierie web permet d'étendre le périmètre
              fonctionnel de vos applications, tout en limitant les "prises de
              poids" logicielles.
            </p>
            <p>
              Les programmes conservent des performances optimisées, sans être
              plus coûteux.
            </p>
            <LinksMenu
              links={[
                {
                  link: `#${ACCUEIL_SECTIONS.MOTIVATIONS.id}`,
                  label: "Qu'est-ce que l'éco-conception ?",
                  color: COLORS.SUN,
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
        >
          <>
            <Quote displayHeading={6}>
              <>
                Créer des solutions à des problématiques de la vie courante,
                tout en réduisant les impacts négatifs d'internet pour la
                planète.
              </>
            </Quote>
            <p>
              Les usages de l'informatique créent des besoins exponentiels en
              infrastructure matérielle et en puissance de calcul. Même au sein
              d'un projet applicatif, l'ajout de nouvelles fonctionnalités
              multiplie la consommation de ressources.{" "}
              <b>
                Pourtant, la croissance de ces coûts (financiers, énergétiques
                et humains) devrait être endiguée.
              </b>
            </p>
            <p>
              C'est tout l'enjeu de l'éco-conception et de la sobriété
              numérique. Ceci serait impossible sans une bonne compréhension des
              motifs de conception logicielle.
            </p>
            <LinksMenu
              links={[
                {
                  label: "À propos des design patterns",
                  link: `#${ACCUEIL_SECTIONS.CODE_PHILOSOPHIE.id}`,
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
        >
          <>
            <p>
              <b>
                Le code ce n'est pas que du code, c'est un organisme vivant.
              </b>
            </p>
            <p>
              Pour moi, une application est un ecosystème : avec ses flux, ses
              entités, ses noeuds à résoudre. Les motifs de conception (design
              patterns), qui sont partout dans le code, interagissent ensemble
              en permanence pour former un organisme évolutif.
            </p>
            <p>
              Une <b>bonne conception</b> devient alors juste un langage de
              motifs qui fonctionne. Ainsi, en plus d'un portefeuille de
              compétences, j'apporte une <b>vision méta du code</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: `#${ACCUEIL_SECTIONS.COLLABORATION.id}`,
                  label: "Pouvons-nous travailler ensemble ?",
                  color: COLORS.LAGOON,
                },
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
          backgroundColor={COLORS.LAGOON}
        >
          <>
            <p>
              PME, start-ups, pôle applicatif ... le développement de votre
              application web a besoin d'un coup de pouce courte, moyenne ou
              longue durée ? Votre environnement est sain, vous avez juste la
              bonne dose de stress, vous prenez des vacances et votre projet
              n'était pas à livrer hier ?
            </p>
            <p>
              <b>
                Vous pourriez apprécier mon expertise sur la stack JavaScript
                moderne, mon esprit analytique et ma bonne humeur.
              </b>{" "}
              J'aime les projets qui ont du sens, à la technique bien huilée où
              ma créativité technique peut s'exprimer. Une de mes grandes forces
              est de questionner, aborder les problématiques autrement et
              trouver des solutions plus simples.
            </p>
            <p>Au premier Janvier 2023, je facture mon intervention :</p>
            <p className="display-2">470€/jour HT</p>
            <p>
              <b>
                Pour des missions m'occupant plus de 10 jours/mois, mon tarif
                passe à 420€/jour HT.
              </b>
            </p>
            <p>J'interviens jusqu'à :</p>
            <p className="display-5">4 jours/semaine.</p>
            <LinksMenu
              links={[
                {
                  link: `#${ACCUEIL_SECTIONS.CONTACT.id}`,
                  label: "Ça vous dit d'échanger ?",
                  color: COLORS.FLOWER,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={ACCUEIL_SECTIONS.CONTACT.id}
          header={{
            level: 2,
            content: ACCUEIL_SECTIONS.CONTACT.title,
          }}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              Pour <b>discuter ensemble</b>, je vous propose{" "}
              <b>plusieurs solutions</b> :
            </p>
            <LinksMenu
              links={[
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
      </>
    </Layout>
  );
};

export default Accueil;
