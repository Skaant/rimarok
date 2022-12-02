import React from "react";
import PageHeader from "../../components/PageHeader";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import MotifsList from "../../components/MotifsList";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "./prestation.template";
import { COLORS } from "../../data/colors";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../types/GlobalPageContext";

const PAGE_ID = PAGES.MOTIFS;
const { title } = PAGES_DATA[PAGE_ID];

export const MOTIFS_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "harmonie-du-code",
    title: "Trouver l'harmonie du code",
  },
  WHAT_IS: {
    id: "qu-est-ce-qu-un-motif",
    title: "Qu'est-ce qu'un motif ?",
  },
  HOW_TO: {
    id: "comment-utiliser-un-motif",
    title: "Comment utiliser un motif ?",
  },
  LISTE: {
    id: "liste-motifs-informatiques",
    title: "Liste des motifs informatiques",
  },
  /** CTA contact */
  CONTRIBUER: {
    id: "contribuer",
    title: "Contribuer",
  },
};

function Motifs({ pageContext }: PageProps<undefined, GlobalPageContext>) {
  const { motifs } = pageContext;
  return (
    <Layout
      head={{
        title,
      }}
      {...pageContext}
    >
      <>
        <div
          className="d-flex justify-content-end"
          style={{
            paddingTop: "6rem",
            marginBottom: "-16vh",
            maxHeight: "80vh",
            paddingRight: "calc(-100px + 22vw)",
          }}
        >
          <img
            src="/motifs-2.svg"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <PageHeader
          title={title}
          subtitle="Un langage de conception"
          tableOfContents={{ contents: MOTIFS_SECTIONS }}
          backgroundColor={COLORS.LIGHT}
        />
        <Row
          id={MOTIFS_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.INTRO_PAGE.title,
          }}
          backgroundColor={COLORS.LAGOON}
          tags={["qualité", "langage", "vivant", "optimisation"]}
        >
          <>
            <p>
              Christopher Alexander publie à la fin des années 70{" "}
              <b>trois livres fondateurs</b> d'architecture,{" "}
              <b>
                qui résonnent à la perfection pour le développement logiciel
              </b>
              .
            </p>
            <p>
              Dans <b>The Timeless Way of Building</b>, il tente de décrire{" "}
              <b>la qualité</b> qui rend <b>les systèmes vivants harmonieux</b>{" "}
              : leur capacité à <b>former un langage de motifs</b> cohérent.
            </p>
            <p>
              <b>A Pattern Language</b> est un recueil de problèmes/solutions
              génériques pour les villes et les bâtiments, mais que le Gang des
              4 transforma pour des{" "}
              <b>problématiques cette fois liées à l'informatique</b> dans{" "}
              <b>
                Design Patterns: Elements of Reusable Object-Oriented Software
              </b>
              .
            </p>
            <p>
              Avec cette vision abstraite, bâtir{" "}
              <b>une application web fonctionnelle et efficiente</b> c'est :{" "}
            </p>
            <p>
              Solidement <b>identifier les motifs</b> qui la compose et les{" "}
              <b>imbriquer de façon harmonieuse</b> pour{" "}
              <b>optimiser les flux de données</b>.
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.WHAT_IS.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.WHAT_IS.title,
          }}
          tags={["répétition", "probleme récurrent", "solution générique"]}
        >
          <>
            <p>
              Avant de répondre à cette question, commençons par une première
              citation, <b>et particularité des motifs</b> :
            </p>
            <Quote
              displayHeading={5}
              legend={{
                author: "Cristopher Alexander",
                source: "A Pattern Language",
              }}
              backgroundColor={COLORS.SUN}
            >
              <>
                <p>
                  Each pattern describes a problem which occurs over and over
                  again in our environment, and then describes the core of the
                  solution to that problem, in such a way that you can use this
                  solution a million times over, without ever doing it the same
                  way twice.
                </p>
              </>
            </Quote>
            <ul>
              <li>
                Dans son sens courant, un motif est{" "}
                <b>un ensemble de propriétés qui se répètent</b> (occurences)
                dans un groupe d'individus.
              </li>
              <li>
                Dans le dictionnaire, on lit également : ce qui pousse à agir,
                ce qui justifie, <b>intention</b> ...
              </li>
              <li>
                Christopher Alexander les définit comme{" "}
                <b>un problème récurrent</b> et <b>la solution générique</b> à
                mettre en oeuvre pour y répondre.
              </li>
              <li>
                En informatique, un motif est <b>une structure</b> de fichiers,
                instructions, données, propriétés qui effectivement{" "}
                <b>répond à des problématiques récurrentes</b>.
              </li>
            </ul>
            <p>
              Certains motifs sont relatifs à des langages de programmation,
              d'autres à des frameworks mais{" "}
              <b>la majorité des motifs sont transverses</b> (logiques et
              métiers) .
            </p>
            <br />
            <p>
              <b>Ne remontez pas trop loin dans l'abstraction</b> ou vous
              pourriez perdre votre raison en tentant de résoudre l'équation :
            </p>
            <Quote displayHeading={3} backgroundColor={COLORS.SUN}>
              <p>Le motif motif est une instance de lui-même.</p>
            </Quote>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.HOW_TO.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.HOW_TO.title,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={["implémentation", "contexte", "description"]}
        >
          <>
            <p>
              <b>Un motif est une idée</b> et ne peut par conséquent être
              utilisé directement dans le code.
            </p>
            <p>
              L'<b>implémentation d'un motif dépend</b> du langage, du paradigme
              et, en bonne partie, <b>des humains impliqués</b> dans le projet.
            </p>
            <p>
              <b>Dans A Pattern Language</b>, la solution générique proposée
              pour répondre à un problème peut{" "}
              <b>être facilement materialisée en suivant la description</b> de
              celui-ci.
            </p>
            <p>
              La plupart des <b>motifs apparaissent tout seul</b> et il convient
              simplement de <b>les reconnaître</b> pour, éventuellement les
              corriger, mais surtout <b>les connecter</b>.
            </p>
            <p>
              La difficulté réside essentiellement là :{" "}
              <b>
                assembler correctement toutes ces occurences de motifs pour
                former le plus fluide et élégant langage de motifs
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.LISTE.title,
          }}
          tags={["répertoire", "work in progress"]}
        >
          <>
            <p>
              Je présente ici <b>mon propre langage de motifs</b>, fait de{" "}
              <b>ceux que je connais et que je sais mettre en relation</b>.
            </p>
            <p>
              <b>Dans le temps</b>, j'aimerais beaucoup pouvoir ajouter leur{" "}
              <b>description</b>, le <b>problème</b> qu'ils adressent et la
              façon dont ils proposent d'<b>y répondre</b>.
            </p>
            <p>
              Cette liste est <b>forcément non-exhaustive</b>, et je vous incite
              fortement{" "}
              <InternalLink
                section={MOTIFS_SECTIONS.CONTRIBUER}
                altTitle="à y contribuer"
              />{" "}
              :)
            </p>
            <p className="mb-2">
              <b>Compte des motifs répertoriés* : {motifs.length}.</b>
            </p>
            <p className="small">* Pas forcément détaillés.</p>
            <MotifsList motifs={motifs} />
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.CONTRIBUER.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.CONTRIBUER.title,
          }}
          tags={["intelligence collective", "contact", "amélioration continue"]}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Pour <b>étendre ce dictionnaire de motifs</b>, vous pouvez{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                section={PRESTATION_SECTIONS.CONTACT}
                altTitle="me contacter directement"
              />{" "}
              ou bien même{" "}
              <a href={WEBSITE_DATA.GITHUB_LINK}>ouvrir une PR sur Github</a>.
            </p>
            <p>
              <b>Le langage des motifs est sans</b> (début ni) <b>fin.</b>
            </p>
            <p>
              Il est aussi <b>vaste</b> que l'intersection de{" "}
              <b>tous les contextes et problématiques métiers</b> :
            </p>
            <Quote displayHeading={5}>
              <p>C'est proprement exponentiel et inconcevable !</p>
            </Quote>
            <p>
              Restez <b>connecté</b> !
            </p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Motifs;
