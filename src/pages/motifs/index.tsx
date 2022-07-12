import React from "react";
import FullScreenTitle from "../../components/FullScreenTitle";
import InternalLink from "../../components/InternalLink";
import Layout from "../../components/Layout";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import WEBSITE_DATA from "../../data/website";
import Section from "../../types/Section";
import { PRESTATION_SECTIONS } from "../prestation";

const PAGE_ID = PAGES.MOTIFS;
const { title } = PAGES_DATA[PAGE_ID];

const MOTIFS_SECTIONS: { [key: string]: Section } = {
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
    title: "Contibuer",
  },
};

function Motifs() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle title={title} subtitle="Un langage de conception" />
        <Row
          id={MOTIFS_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <Quote
              displayHeading={5}
              legend={{
                author: "Cristopher Alexander",
                source: "The Timeless Way of Building",
              }}
            >
              <>
                <p>
                  And when a building has this fire, then it becomes a part of
                  nature.
                </p>
                <p>
                  Like ocan waves, or blades of grass, its parts are governed by
                  the endless play of repetition and variety, created in the
                  presence of the fact that all things pass.
                </p>
                <p>This is the quality itself.</p>
              </>
            </Quote>
            <p>
              Christopher Alexander publie à la fin des années 70 deux livres
              fondateurs d'architecture, mais qui résonnent à la perfection pour
              le développement logiciel.
            </p>
            <p>
              Dans <i>The Timeless Way of Building</i>, il tente de décrire la
              qualité qui rend les systèmes vivants et harmonieux : leur
              capacité à former un langage de motifs cohérent.
            </p>
            <p>
              <i>A Pattern Language</i> est un recueil de problèmes/solutions
              génériques pour les villes et les bâtiments, mais que le Gang des
              4 transforma pour des problématiques récurrentes cette fois liées
              à l'informatique dans{" "}
              <i>
                Design Patterns: Elements of Reusable Object-Oriented Software
              </i>
              .
            </p>
            <p>
              Avec cette vision abstraite,{" "}
              <b>bâtir une application web fonctionnelle et efficiente</b> c'est
              :{" "}
              <b>
                solidement identifier les motifs qui la compose et les imbriquer
                de façon harmonieuse pour optimiser le transit des flux de
                données
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.WHAT_IS.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.WHAT_IS.title,
          }}
        >
          <>
            <p>
              Dans le sens qui nous intéresse, un motif est un ensemble de
              caractères qui se répètent dans un groupe d'entités.
            </p>
            <p>
              Toutefois la définition de motif, donne : ce qui pousse à agir, ce
              qui justifie, intention ...
            </p>
            <p>
              Les motifs de Cristopher Alexander décrivent eux un problème
              courant et la solution générique pour y remédier.
            </p>
            <p>
              <b>Dans l'informatique,</b> un motif est une structure de
              [fichiers/instructions/données]* qui répond effectivement à des
              problématiques récurrentes.
            </p>
            <p>
              Certains motifs sont relatifs à des langages de programmation,
              d'autres à des frameworks, toutefois la majorité des motifs sont
              transverses.
            </p>
            <p>
              Attention à ne pas trop remonter loin dans l'abstraction car sinon
              vous pourriez tomber des nus en tentant de résoudre l'équation :
            </p>
            <Quote displayHeading={3}>
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
        >
          <>
            <p>
              Un motif est une idée et ne peut par conséquent être utilisé
              directement dans le code.
            </p>
            <p>
              L'<b>implémentation d'un motif</b> dépend du langage, du paradigme
              et même des humains impliqués dans le projet.
            </p>
            <p>
              La solution générique proposée pour répondre à un problème
              récurent peut être identifié ou développé facilement en suivant la
              description de celui-ci.
            </p>
            <p>
              La plupart des motifs apparaissent tout seul et il convient
              simplement de les reconnaître pour, éventuellement les corriger,
              mais surtout les connecter.
            </p>
            <p>
              La difficulté réside réellement là : assembler correctement toutes
              ces occurences de motifs pour former le plus fluide et élégant{" "}
              <i>pattern language</i>.
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.LISTE.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.LISTE.title,
          }}
        >
          <>
            <p>
              Je présente ici mon propre langage de motifs, fait de ceux que je
              connais et que je sais mettre en relation.
            </p>
            <p>
              Cette liste est <i>forcément</i> non-exhaustive, et je vous incite
              fortement <InternalLink section={MOTIFS_SECTIONS.CONTRIBUER} />.
            </p>
          </>
        </Row>
        <Row
          id={MOTIFS_SECTIONS.CONTRIBUER.id}
          header={{
            level: 2,
            content: MOTIFS_SECTIONS.CONTRIBUER.title,
          }}
        >
          <>
            <p>
              Pour étendre mon dictionnaire de motifs, vous pouvez{" "}
              <InternalLink
                page={PAGES.PRESTATION}
                section={PRESTATION_SECTIONS.CONTACT}
                altTitle="me contacter directement"
              />{" "}
              ou bien même pourquoi pas
              <a href={WEBSITE_DATA.GITHUB_LINK}>ouvrir une PR sur Github</a>.
            </p>
            <p>Le langage des motifs est sans fin.</p>
            <p>
              Il est aussi vaste que l'intersection de tous les contextes et
              problématiques métiers ...
            </p>
            <Quote displayHeading={5}>
              <p>C'est proprement exponentiel et inconcevable !</p>
            </Quote>
            <p>Stay tuned</p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Motifs;
