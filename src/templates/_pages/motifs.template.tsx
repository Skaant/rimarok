import React from "react";
import PageHeader from "../../components/PageHeader";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "./prestation.template";
import { COLORS } from "../../data/colors";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../types/GlobalPageContext";
import MotifsList from "../../components/MotifsList";

const PAGE_ID = PAGES.MOTIFS;
const { title } = PAGES_DATA[PAGE_ID];

export const MOTIFS_SECTIONS: { [key: string]: Section } = {
  WHAT_IS: {
    id: "qu-est-ce-qu-un-motif-de-conception",
    title: "Qu'est-ce qu'un motif de conception ?",
  },
  HISTORY: {
    id: "un-petit-historique-des-motifs",
    title: "Un petit historique des motifs",
  },
  MOT_MOTIF: {
    id: "autres-reflexions-sur-le-sens-du-mot-motif",
    title: "Autres réflexions sur le sens du mot motif",
  },
  HARMONY: {
    id: "harmonie-du-code",
    title: "Trouver l'harmonie du code",
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
            marginBottom: "-32vh",
            maxHeight: "100vh",
            paddingRight: "calc(-100px + 22vw)",
          }}
        >
          <img
            src="/motifs-2.svg"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <PageHeader
          title={"Design patterns, motifs de conception logiciels"}
          subtitle="Un langage pour créer des applications efficientes"
          tableOfContents={{ contents: MOTIFS_SECTIONS }}
          backgroundColor={COLORS.LIGHT}
        />
        <Row
          id={MOTIFS_SECTIONS.WHAT_IS.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.WHAT_IS.title,
          }}
          tags={["problématique récurrente", "solution générique"]}
          backgroundColor={COLORS.SUN}
        >
          <>
            <p>
              Les <i>design patterns</i>, ou <b>motifs de conception</b>, sont
              un <b>outil conceptuel très important</b> pour le développement
              web et l'ingénierie logicielle.
            </p>
            <p>
              Ils adressent chacun une <b>problématique récurrente</b> qui
              apparaît lorsque l'on <b>développe des projets informatiques</b>.
            </p>
            <p>
              Après une description de l'<b>occurence du problème</b>, pour
              permettre son identification, une{" "}
              <b>solution générique, et efficace,</b> est proposée.
            </p>
            <p>
              C'est un <b>mode d'emploi</b>, qui{" "}
              <b>donne des super-pouvoirs dans le code</b>,{" "}
              <b>
                utilisables dans n'importe quel environnement de développement
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.HISTORY.id}
          header={{
            content: MOTIFS_SECTIONS.HISTORY.title,
            level: 3,
          }}
          backgroundColor={COLORS.SUN}
          paddingY={0}
          stars={true}
          collapsible={true}
        >
          <>
            <p>
              Tout commence dans les années 70 avec Cristopher Alexander et ses
              deux livres : <i>The Timeless Way of Building</i>
              et <i>A pattern langage</i>.
            </p>
            <p>Il y propose les principes suivants :</p>
            <ul>
              <li>
                Ce qui rend harmonieux un bâtiment c'est sa capacité à agréger
                des motifs et à les faire interagir entre eux,
              </li>
              <li>
                Ces motifs peuvent être décrits et identifiés, pour former un
                langage qu'on peut apprendre à parler pour que les "bâtiments
                fonctionnent".
              </li>
            </ul>
            <p className="display-6 my-4">
              Or, ces deux principes s'appliquent aussi très bien au{" "}
              <b>développement logiciel</b> !
            </p>
            <p>
              C'est ce que constatent et formalisent <b>le Gang des 4</b> dans
              leur livre{" "}
              <i>
                Design Patterns: Elements of Reusable Object-Oriented Software
              </i>
              .
            </p>
            <p>
              Depuis c'est une source d'inspiration intarissable pour de
              nombreux développeurs,
              <b>
                mais je pense qu'avec les motifs ont peut/doit aller plus loin
                ...
              </b>
            </p>
            <Quote
              displayHeading={5}
              legend={{
                author: "Cristopher Alexander",
                source: "A Pattern Language",
              }}
              backgroundColor={COLORS.LIGHT}
            >
              <>
                <p>
                  Each pattern describes a problem which occurs over and over
                  again in our environment, and then describes the core of the
                  solution to that problem [...].
                </p>
              </>
            </Quote>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.MOT_MOTIF.id}
          header={{
            content: MOTIFS_SECTIONS.MOT_MOTIF.title,
            level: 3,
          }}
          backgroundColor={COLORS.SUN}
          paddingY={0}
          collapsible={true}
        >
          <>
            <p>
              La raison pour laquelle je préfère utiliser le terme{" "}
              <b>motifs de conception</b> plutôt que{" "}
              <b>patrons de conception</b>, car je trouve toute l'etymologie
              plus pertinente pour ce phénomène qui survient en permanence
              pendant le développement.
            </p>
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
            <Quote displayHeading={3} backgroundColor={COLORS.LIGHT}>
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
          backgroundColor={COLORS.LIGHT}
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
          </>
        </Row>
        <MotifsList motifs={motifs} />
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
