import React from "react";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/Layout";
import Row from "../../components/Row";
import { ARTICLES_DATA } from "../../data/articles";
import InternalLink from "../../components/InternalLink";
import { PAGES } from "../../data/pages";

const { title, description } = ARTICLES_DATA[7];

function Article8() {
  return (
    <Layout
      head={{
        title,
        description,
      }}
    >
      <>
        <PageHeader
          title={title}
          subtitle={
            "J'externalise la logique et les composants de mon site pilote dans un module pour pouvoir l'importer sur mes autres sites."
          }
        />
        <Row>
          <>
            <p>
              Wordpress est si utilisé car il associe :
              <b>facilité d'installation</b> et{" "}
              <b>capacité des non-informaticiens à accéder au back-end</b>.
            </p>
            <p>
              Pourtant Wordpress n'est pas réputée une solution économique
              comparée à un <b>site statique</b>.
            </p>
            <p>
              En <b>associant Gatsby et Notion</b> ensemble, j'espère pouvoir{" "}
              <b>fournir un back-end user-friendly et les performances</b> d'un
              site statique.
            </p>
          </>
        </Row>
        <Row
          header={{
            content: 'Mon module "statikon"',
            level: 2,
          }}
        >
          <>
            <p>
              Dans le but d'
              <b>industrialiser la création de sites sur cette stack</b>, j'ai
              choisi d'extraire des composants logiciels de mon site pilote.
            </p>
          </>
        </Row>
        <Row
          header={{
            content: "Motivation de la création du module",
            level: 3,
          }}
        >
          <>
            <p>
              Après la refonte de{" "}
              <InternalLink page={PAGES.ACCUEIL} altTitle="ce site" />, je me
              suis attaqué à la refonte rapide (et non-exhaustive) de mon site
              créatif :<a href="https://imrok.fr">IMROK.fr</a>.
            </p>
            <p>
              Dans la foulée, l'objectif serait de créer un site de type de blog
              pour <a href="https://eljie.fr">Eljie</a>
              sur cette stack.
            </p>
            <p>
              J'ai donc réussi à extrait{" "}
              <b>les composants, enum, template et type</b> du projet
              <a href="https://github.com/Skaant/imrok-notion">
                https://github.com/Skaant/imrok-notion
              </a>
              pour les mettre dans le{" "}
              <a href="https://www.npmjs.com/package/statikon">
                module NPM <b>statikon</b>
              </a>
              .
            </p>
            <p>
              Je bute néanmoins sur l'import des helpers dans le fichier{" "}
              <b>gatsby-node.ts</b> ("ReferenceError: Cannot access 'f' before
              initialization").
            </p>
          </>
        </Row>
        <Row
          header={{
            content: "Quelle suite pour statikon ?",
            level: 2,
          }}
        >
          <>
            <p>
              L'ambition pour ce module est d'augmenter la quantité de
              composants et de réussir à exporter aussi les helpers.
            </p>
            <p>
              Encore quelques blocs Notion doivent être ajouté à la
              bibliothèque.
            </p>
            <p>
              Des composants spéciaux tels que des listes de contenu spécifiques
              (texte, vidéos ...) pourraient être rapidement ajoutés.
            </p>
            <p>
              Évitons par ailleurs de trop se projeter, et attendons de voir ce
              que le prochain site prévu nous lève comme besoins d'abstraction.
            </p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Article8;
