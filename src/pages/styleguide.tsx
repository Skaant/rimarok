import * as React from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import TableOfContents from "../components/TableOfContents";
import type Section from "../types/Section";
import "../styles/global.scss";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import PageHeader from "../components/PageHeader";
import { Link } from "gatsby";
import LinksMenu from "../components/LinksMenu";
import BadgesList from "../components/BadgesList";
import Project from "../components/Project";
import BackToTop from "../components/BackToTop";
import InternalLink from "../components/InternalLink";

const STYLEGUIDE_TITLE = "Styleguide";

const STYLEGUIDE_SECTIONS: { [section: string]: Section } = {
  /** STYLE ELEMENTS */
  COLORS: {
    id: "colors",
    title: "Couleurs",
  },
  FONTS: {
    id: "fonts",
    title: "Polices",
  },
  /** COMPONENTS */
  LAYOUT: {
    id: "layout",
    title: "Layout",
    fontSlab: true,
  },
  /* Row-sized */
  ROW: {
    id: "row",
    title: "Row",
    fontSlab: true,
  },
  FULL_SIZE_TITLE: {
    id: "full-size-title",
    title: "Full size title",
    fontSlab: true,
  },
  MOTIFS_LIST: {
    id: "motifs-list",
    title: "Motifs list",
    fontSlab: true,
  },
  ARTICLES_LIST: {
    id: "articles-list",
    title: "Articles list",
    fontSlab: true,
  },
  /* Row content-sized */
  TABLE_OF_CONTENTS: {
    id: "table-of-contents",
    title: "Table of contents",
    fontSlab: true,
  },
  QUOTE: {
    id: "quote",
    title: "Quote",
    fontSlab: true,
  },
  LINKS_MENU: {
    id: "links-menu",
    title: "Links menu",
    fontSlab: true,
  },
  BADGES_LIST: {
    id: "badges-list",
    title: "Badges list",
    fontSlab: true,
  },
  PROJECT: {
    id: "project",
    title: "Project",
    fontSlab: true,
  },
  BACK_TO_TOP: {
    id: "back-to-top",
    title: "Back to top",
    fontSlab: true,
  },
};

const Styleguide = () => {
  return (
    <Layout
      head={{
        title: STYLEGUIDE_TITLE,
      }}
    >
      <>
        <PageHeader
          title={STYLEGUIDE_TITLE}
          subtitle="Éléments de charte graphique et composants du site"
          backgroundColor={COLORS.LAGOON}
          tableOfContents={{ contents: STYLEGUIDE_SECTIONS }}
        />
        <Row
          id={STYLEGUIDE_SECTIONS.COLORS.id}
          header={{ content: STYLEGUIDE_SECTIONS.COLORS.title, level: 2 }}
        >
          <>
            <p>
              Les couleurs du thème sont organisés en <b>trois couples</b>, avec{" "}
              <b>une couleur principale</b> (utilisée pour les fonds notamment)
              et <b>son accent</b> (utilisée pour les boutons) :
            </p>
            <ul>
              <li>
                <a href={`#${COLORS.FLOWER}`}>FLOWER</a> (principale) et{" "}
                <a href={`#${COLORS.ABYSS}`}>ABYSS</a> (accent),
              </li>
              <li>
                <a href={`#${COLORS.SUN}`}>SUN</a> (principale) et{" "}
                <a href={`#${COLORS.MIST}`}>MIST</a> (accent),
              </li>
              <li>
                <a href={`#${COLORS.LAGOON}`}>LAGOON</a> (principale) et{" "}
                <a href={`#${COLORS.GROUND}`}>GROUND</a> (accent).
              </li>
            </ul>
            <p>
              Les noms sont inventés et ne correspondent pas à des valeurs
              standards.
            </p>
            <p>
              En plus de ça il existe <b>deux couleurs techniques</b> : light et
              dark.
            </p>
          </>
        </Row>
        {Object.entries(COLORS).map(([key, value]) => (
          <Row
            key={key}
            id={value}
            backgroundColor={value}
            header={{ content: key, level: 3 }}
          >
            <>{key}</>
          </Row>
        ))}
        <Row id={STYLEGUIDE_SECTIONS.LAYOUT.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.LAYOUT.title}</h2>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.ROW.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.ROW.title}</h2>
            <p>
              Le composant <span className="font-slab">Row</span> décrit une{" "}
              <b>section de page</b> .
            </p>
            <p>
              Une page est faite d'
              <b>
                une série de <span className="font-slab">Row</span>
              </b>
              , les uns en dessous des autres.
            </p>
            <p>
              Le composant peut ensuite être{" "}
              <b>décliné en d'autres composants de section</b>, tels que{" "}
              <Link
                to={`#${STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.id}`}
                className="font-slab"
              >
                {STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.title}
              </Link>
              ,{" "}
              <Link
                to={`#${STYLEGUIDE_SECTIONS.ARTICLES_LIST.id}`}
                className="font-slab"
              >
                {STYLEGUIDE_SECTIONS.ARTICLES_LIST.title}
              </Link>
              .
            </p>
          </>
        </Row>
        <Row>
          <>
            <h3>Variations de couleur</h3>
          </>
        </Row>
        <Row backgroundColor={COLORS.ABYSS}>
          <>
            <p>
              Couleur <i>abyss</i>
            </p>
          </>
        </Row>
        <Row backgroundColor={COLORS.FLOWER}>
          <>
            <p>
              Couleur <i>flower</i>
            </p>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.QUOTE.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.QUOTE.title}</h2>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Sans légende)</p>
            <Quote displayHeading={6}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Pas de source, mais un auteur)</p>
            <Quote displayHeading={6} legend={{ author: "Auteur optionnel" }}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Source, mais pas d'auteur)</p>
            <Quote displayHeading={6} legend={{ source: "Source optionnelle" }}>
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row>
          <>
            <h3>Citation simple</h3>
            <p>(Source et auteur)</p>
            <Quote
              displayHeading={6}
              legend={{
                source: "Source optionnelle",
                author: "Auteur optionnel",
              }}
            >
              <>Ceci est une citation, juste une citation</>
            </Quote>
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.title}</h2>
            <p>Permet la navigation entre les sections d'une page.</p>
          </>
        </Row>
        <Row>
          <>
            <TableOfContents
              contents={{
                demo: {
                  id: "demo",
                  title: "Démonstration",
                },
              }}
            />
          </>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.LINKS_MENU.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.LINKS_MENU.title}</h2>
            <p>
              Permet la naviguation interne et externe au moyen d'une liste de
              liens.
            </p>
          </>
        </Row>
        <Row>
          <LinksMenu
            links={[
              { link: "#", label: "Link 1", color: COLORS.FLOWER },
              { link: "#", label: "Link 2", color: COLORS.FLOWER },
            ]}
          />
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.BADGES_LIST.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.BADGES_LIST.title}</h2>
            <p>Affiche une liste inline de badges pilules.</p>
          </>
        </Row>
        <Row>
          <BadgesList
            badges={[
              { label: "Badge 1", color: COLORS.FLOWER },
              { label: "Badge 2", color: COLORS.MIST },
            ]}
          />
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.PROJECT.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.PROJECT.title}</h2>
            <p>Project est un élément enfant du composant Carousel.</p>
          </>
        </Row>
        <Row>
          <Project
            title="Titre du projet"
            scope="full-stack"
            tags={["tag 1", "tag 2"]}
            date="22 juin 2022"
          >
            <div>Contenu du projet</div>
          </Project>
        </Row>
        <Row id={STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.FULL_SIZE_TITLE.title}</h2>
            <p>
              Affiche le titre et le sous-titre de la page sous la forme d'une
              bannière, étendue sur l'intégralité de la largeur de la page.
            </p>
          </>
        </Row>
        <>
          <PageHeader
            backgroundColor={COLORS.SUN}
            title="Ceci est un titre"
            subtitle="Ceci est un sous-titre"
            titleSize="normal"
            contents={STYLEGUIDE_SECTIONS}
          />
          <PageHeader
            backgroundColor={COLORS.LAGOON}
            title="Ceci est un titre"
            subtitle="Ceci est un sous-titre"
            titleSize="big"
            contents={STYLEGUIDE_SECTIONS}
          />
        </>
        <Row id={STYLEGUIDE_SECTIONS.BACK_TO_TOP.id}>
          <>
            <h2>{STYLEGUIDE_SECTIONS.BACK_TO_TOP.title}</h2>
            <p>
              Affiche un bouton cliquable permettant de revenir en haut de la
              page.
            </p>
          </>
        </Row>
        <Row>
          <BackToTop isFixed={false} backgroundColor={COLORS.LAGOON} />
        </Row>
      </>
    </Layout>
  );
};

export default Styleguide;
