import React from "react";
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import Row from "../../../components/Row";
import { ARTICLES_DATA } from "../../../data/articles";
import InternalLink from "../../../components/InternalLink";
import { PAGES } from "../../../data/pages";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../../components/LinksMenu";
import { PageProps } from "gatsby";
import { GlobalPageContext } from "../../../types/GlobalPageContext";

const { title, description } = ARTICLES_DATA[7];

function Article9({ pageContext }: PageProps<undefined, GlobalPageContext>) {
  return (
    <Layout
      head={{
        title,
        description,
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={title}
          subtitle={
            "J'externalise la logique et les composants de mon site pilote dans un module pour pouvoir l'importer sur mes autres sites."
          }
        />
        <Row backgroundColor={COLORS.FLOWER} paddingY={5} colClassName="mt-5">
          <>
            <p>
              Si Wordpress est aussi utilisé c'est qu'il associe :{" "}
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
          paddingY={5}
          colClassName="mt-5"
        >
          <>
            <p>
              Dans le but d'
              <b>industrialiser la création de sites sur cette stack</b>, j'ai
              choisi d'<b>extraire des composants logiciels</b> de mon site
              pilote <b>dans un module externe</b>.
            </p>
            <p>
              Ainsi, j'espère disposer d'une{" "}
              <b>base replicable pour de nombreux sites</b>.
            </p>
            <LinksMenu
              links={[
                {
                  label: "Le projet GitHub",
                  link: "https://github.com/Skaant/imrok-notion",
                },
                {
                  label: "Le module NPM",
                  link: "https://www.npmjs.com/package/statikon",
                  color: COLORS.ABYSS,
                },
              ]}
            />
          </>
        </Row>
        <Row
          header={{
            content: "Génèse du module",
            level: 3,
          }}
          backgroundColor={COLORS.SUN}
          paddingY={5}
        >
          <>
            <p>
              Après la refonte de{" "}
              <InternalLink page={PAGES.ACCUEIL} altTitle="ce site" />, je me
              suis attaqué rapidement (et de façon non-exhaustive) à{" "}
              <b>mon site créatif</b> : <a href="https://imrok.fr">IMROK.fr</a>.
            </p>
            <p>
              <b>Dans la foulée</b>, l'objectif serait de{" "}
              <b>créer un autre site</b> de type de blog pour{" "}
              <a href="https://eljie.fr">Eljie</a> <b>sur cette stack</b>.
            </p>
            <p>
              La conception du second met en relief les <b>motifs récurrents</b>
              avec le premier.
            </p>
            <p>
              Ainsi, j'ai pu extraire{" "}
              <b>les composants, enum, template et type</b> du projet pour les
              mettre dans le module NPM <b>statikon</b>.
            </p>
            <p>
              Je bute néanmoins sur l'import des helpers dans le fichier{" "}
              <b>gatsby-node.ts</b>{" "}
              <a href="https://stackoverflow.com/questions/73862726/gatsby-typescript-external-module-function-import-throws-referenceerror">
                ("ReferenceError: Cannot access 'f' before initialization")
              </a>
              .
            </p>
          </>
        </Row>
        <Row
          header={{
            content: "Quelle suite pour statikon ?",
            level: 2,
          }}
          paddingY={5}
          colClassName="mt-5"
        >
          <>
            <p>
              L'ambition pour ce module est d'
              <b>augmenter la quantité de composants</b> et de réussir aussi à{" "}
              <b>exporter les helpers</b>.
            </p>
            <p>
              Encore <b>quelques composants TSX pour blocs Notion</b> doivent
              être ajouté à la bibliothèque.
            </p>
            <p>
              Des composants spéciaux tels que des{" "}
              <b>listes de contenu spécifiques</b>
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

export default Article9;
