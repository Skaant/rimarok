import * as React from "react";
import Layout from "../../components/Layout";
import Quote from "../../components/Quote";
import TableOfContents from "../../components/TableOfContents";
import type Section from "../../types/Section";
import "../../styles/global.scss";
import Row from "../../components/Row";
import { COLORS } from "../../data/colors";
import PageHeader from "../../components/PageHeader";
import { PageProps } from "gatsby";
import LinksMenu from "../../components/LinksMenu";
import BadgesList from "../../components/BadgesList";
import Project from "../../components/Project";
import BackToTop from "../../components/BackToTop";
import InternalLink from "../../components/InternalLink";
import Navbar from "../../components/Navbar";
import { PAGES, PAGES_DATA } from "../../data/pages";
import Footer from "../../components/Footer";
import ArticlesList from "../../components/ArticlesList";
import MotifsList from "../../components/MotifsList";
import { GlobalPageContext } from "../../types/GlobalPageContext";

const PAGE_ID = PAGES.STYLEGUIDE;
const { title } = PAGES_DATA[PAGE_ID];

/**
 * @todo Carousel, ArticlesListItem*, TagsDateHeader,
 *  MotifsListItem*
 */
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
  NAVBAR: {
    id: "navbar",
    title: "Navbar",
    fontSlab: true,
  },
  BACK_TO_TOP: {
    id: "back-to-top",
    title: "Back to top",
    fontSlab: true,
  },
  FOOTER: {
    id: "footer",
    title: "Footer",
    fontSlab: true,
  },
  /* Row-sized */
  ROW: {
    id: "row",
    title: "Row",
    fontSlab: true,
  },
  PAGE_HEADER: {
    id: "page-header",
    title: "PageHeader",
    fontSlab: true,
  },
  /* Row content-sized */
  BADGES_LIST: {
    id: "badges-list",
    title: "Badges list",
    fontSlab: true,
  },
  LINKS_MENU: {
    id: "links-menu",
    title: "Links menu",
    fontSlab: true,
  },
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
  PROJECT: {
    id: "project",
    title: "Project",
    fontSlab: true,
  },
  ARTICLES_LIST: {
    id: "articles-list",
    title: "Articles list",
    fontSlab: true,
  },
  MOTIFS_LIST: {
    id: "motifs-list",
    title: "Motifs list",
    fontSlab: true,
  },
};

const Styleguide = ({
  pageContext,
}: PageProps<undefined, GlobalPageContext>) => {
  return (
    <Layout
      head={{
        title,
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={title}
          subtitle="Éléments de charte graphique et composants du site"
          backgroundColor={COLORS.LAGOON}
          tableOfContents={{ contents: STYLEGUIDE_SECTIONS }}
        />
        <Row
          id={STYLEGUIDE_SECTIONS.COLORS.id}
          header={{ content: STYLEGUIDE_SECTIONS.COLORS.title, level: 2 }}
          tags={["variables SCSS", "variables TS"]}
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
            paddingY={3}
          >
            <>{key}</>
          </Row>
        ))}
        <Row
          id={STYLEGUIDE_SECTIONS.FONTS.id}
          header={{ content: STYLEGUIDE_SECTIONS.FONTS.title, level: 2 }}
          tags={["variables SCSS"]}
          backgroundColor={COLORS.LAGOON}
        >
          <>
            <p>
              Sur le site, il y a <b>deux polices différentes</b> :
            </p>
            <ul>
              <li>
                Rubik Regular, utilisée pour le <b>texte de base</b>,
              </li>
              <li>
                <span className="font-slab">Roboto Slab Light</span> pour les{" "}
                <b>titres</b>, les <b>citations</b> (composant{" "}
                <InternalLink section={STYLEGUIDE_SECTIONS.QUOTE} />) et les{" "}
                <b>noms de composants</b>.
              </li>
            </ul>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.LAYOUT.id}
          header={{ content: STYLEGUIDE_SECTIONS.LAYOUT.title, level: 2 }}
          tags={["composant", "échelle de page", "démontré globalement"]}
        >
          <>
            <p>
              Contient les{" "}
              <b>éléments structurels communs à toutes les pages du site</b>.
            </p>
            <p>Il inclut :</p>
            <ul>
              <li>
                Le <b>header de la page</b>, qui utilise{" "}
                <a
                  href="https://github.com/nfl/react-helmet"
                  className="font-slab"
                >
                  {"<Helmet>"}
                </a>{" "}
                pour <b>paramètrer</b> le contenu de la <b>balise {"<head>"}</b>
                .
              </li>
              <li>
                La{" "}
                <InternalLink
                  section={STYLEGUIDE_SECTIONS.NAVBAR}
                  className="font-slab"
                />
                ,
              </li>
              <li>
                Le bouton{" "}
                <InternalLink
                  section={STYLEGUIDE_SECTIONS.BACK_TO_TOP}
                  className="font-slab"
                />
                ,
              </li>
              <li>
                Le contenu de la page (une série de
                <InternalLink
                  section={STYLEGUIDE_SECTIONS.ROW}
                  altTitle="Rows"
                  className="font-slab"
                />{" "}
                dans un conteneur{" "}
                <a href="https://getbootstrap.com/">Bootstrap</a>),
              </li>
              <li>
                Le{" "}
                <InternalLink
                  section={STYLEGUIDE_SECTIONS.FOOTER}
                  className="font-slab"
                />
              </li>
            </ul>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.NAVBAR.id}
          header={{ content: STYLEGUIDE_SECTIONS.NAVBAR.title, level: 2 }}
          tags={["composant", "unique", "dans le layout"]}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              <b>Fixée</b> en haut de chaque page, <b>contient les liens</b>{" "}
              vers les pages :
            </p>
            <ul>
              <li>
                <InternalLink page={PAGES.ACCUEIL} />,
              </li>
              <li>
                <InternalLink page={PAGES.PRESTATION} />,
              </li>
              <li>
                <InternalLink page={PAGES.MOTIFS} />,
              </li>
              <li>
                <InternalLink page={PAGES.BLOG} />.
              </li>
            </ul>
          </>
        </Row>
        <Navbar className="position-initial" {...pageContext} />
        <Row
          id={STYLEGUIDE_SECTIONS.BACK_TO_TOP.id}
          header={{ content: STYLEGUIDE_SECTIONS.BACK_TO_TOP.title, level: 2 }}
          tags={["composant", "unique", "dans le layout"]}
          backgroundColor={COLORS.LAGOON}
        >
          <>
            <p>
              Un <b>bouton flottant</b> pour <b>remonter en haut de la page</b>.
            </p>
          </>
        </Row>
        <Row>
          <BackToTop isFixed={false} backgroundColor={COLORS.LAGOON} />
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.FOOTER.id}
          header={{ content: STYLEGUIDE_SECTIONS.FOOTER.title, level: 2 }}
          backgroundColor={COLORS.SUN}
          tags={["composant", "unique", "dans le layout"]}
        >
          <>
            <p>
              Le <b>pied de page</b>, contenant des{" "}
              <b>liens vers différentes pages du site</b>, ainsi que les{" "}
              <b>crédits</b>.
            </p>
          </>
        </Row>
        <Footer {...pageContext} />
        <Row
          id={STYLEGUIDE_SECTIONS.ROW.id}
          header={{ content: STYLEGUIDE_SECTIONS.ROW.title, level: 2 }}
          tags={[
            "composant",
            "échelle de section",
            "générique",
            "auto-démonstration",
          ]}
        >
          <>
            <p>
              Une <b>section de page</b> : un <b>titre et un id optionnel</b> et
              surtout du <b>contenu</b>.
            </p>
            <p>
              Le composant peut accueillir <b>optionellement</b> une{" "}
              <b>liste de mots-clés</b>, affiché par une{" "}
              <InternalLink section={STYLEGUIDE_SECTIONS.BADGES_LIST} />{" "}
            </p>
            <h3 className="mt-5 mb-4">Spécialisations</h3>
            <p>
              Le composant peut être <b>encapsulé et pré-configuré</b> en{" "}
              <b>d'autres composants</b> de la même échelle,{" "}
              <b>plus spécialisés</b>.
            </p>
            <p>
              Pour l'instant, la seule spécialisation est{" "}
              <InternalLink section={STYLEGUIDE_SECTIONS.PAGE_HEADER} />.
            </p>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.PAGE_HEADER.id}
          header={{
            content: STYLEGUIDE_SECTIONS.PAGE_HEADER.title,
            level: 2,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={["composant", "unique", "descendant de row"]}
        >
          <>
            <p>
              Affiche les <b>titre et sous-titre</b> de la page sous la forme
              d'une bannière, étendue sur l'<b>intégralité de la largeur</b> de
              la page.
            </p>
            <p>
              <b>Peut contenir les composants</b> pré-réglés :
            </p>
            <ul>
              <li>
                <InternalLink section={STYLEGUIDE_SECTIONS.LINKS_MENU} />,
              </li>
              <li>
                <InternalLink section={STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS} />
                .
              </li>
            </ul>
          </>
        </Row>
        <PageHeader
          title="Un PageHeader tout simple"
          subtitle="Juste le titre et le sous-titre"
        />
        <PageHeader
          title="Un PageHeader bien équipé"
          subtitle="Assorti d'un LinksMenu grossi et d'une TableOfContent"
          backgroundColor={COLORS.LAGOON}
          linksMenu={{
            links: [
              {
                link: "#",
                label: "Lien 1",
              },
              {
                link: "#",
                label: "Lien 2",
              },
            ],
          }}
          tableOfContents={{
            contents: {
              SECTION_1: {
                id: "",
                title: "Section 1",
              },
              SECTION_2: {
                id: "",
                title: "Section 2",
              },
              SECTION_3: {
                id: "",
                title: "Section 3",
              },
            },
          }}
        />
        <Row
          id={STYLEGUIDE_SECTIONS.LINKS_MENU.id}
          header={{ content: STYLEGUIDE_SECTIONS.LINKS_MENU.title, level: 2 }}
          tags={["composant", "itératif", "liens", "contenu de row"]}
        >
          <>
            <p>
              Permet la <b>navigation interne</b> et externe au moyen d'une{" "}
              <b>liste de liens</b>.
            </p>
            <p>
              La <b>couleur des liens</b> peut-être{" "}
              <b>individuellement paramétrée</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: "#",
                  label: "Lien 1",
                },
                {
                  link: "#",
                  label: "Lien 2",
                },
                {
                  link: "#",
                  label: "Lien 3",
                  color: COLORS.ABYSS,
                },
              ]}
            />
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.id}
          header={{
            content: STYLEGUIDE_SECTIONS.TABLE_OF_CONTENTS.title,
            level: 2,
          }}
          backgroundColor={COLORS.SUN}
          tags={["composant", "itératif", "liens", "contenu de row"]}
        >
          <>
            <p>
              Permet la <b>navigation</b> entre les <b>sections d'une page</b>.
            </p>
            <TableOfContents
              contents={{
                SECTION_1: {
                  id: "",
                  title: "Section 1",
                },
                SECTION_2: {
                  id: "",
                  title: "Section 2",
                },
                SECTION_3: {
                  id: "",
                  title: "Section 3",
                },
              }}
            />
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.QUOTE.id}
          header={{ content: STYLEGUIDE_SECTIONS.QUOTE.title, level: 2 }}
        >
          <>
            <p>
              <b>Met en valeur un texte</b> et, si applicable, affiche son{" "}
              <b>auteur</b> et sa <b>source</b>.
            </p>
            <Quote displayHeading={6} backgroundColor={COLORS.FLOWER}>
              <>Ceci est une simple citation.</>
            </Quote>
            <Quote
              displayHeading={6}
              legend={{
                source: "Source optionnelle",
                author: "Auteur optionnel",
              }}
              backgroundColor={COLORS.SUN}
            >
              <>Ceci est une citation avec auteur et source</>
            </Quote>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.PROJECT.id}
          header={{
            content: STYLEGUIDE_SECTIONS.PROJECT.title,
            level: 2,
          }}
        >
          <>
            <p>
              Présente les <b>grandes lignes d'un projet</b>, avec : sa stack,
              sa date, son contenu.
            </p>
            <p>
              Affiché{" "}
              <b>
                dans le <i className="font-slab">Carousel</i>
              </b>
              .
            </p>

            <Project
              title="Titre du projet"
              scope="full-stack"
              tags={["tag 1", "tag 2"]}
              date="22 juin 2022"
            >
              <div>Contenu du projet</div>
            </Project>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.ARTICLES_LIST.id}
          header={{
            content: STYLEGUIDE_SECTIONS.ARTICLES_LIST.title,
            level: 2,
          }}
          tags={[
            "composant",
            "itératif",
            "spécifique à la page blog",
            "contenu de row",
          ]}
          backgroundColor={COLORS.LAGOON}
        >
          <>
            <p>
              Sur la page <InternalLink page={PAGES.BLOG} />, affiche la{" "}
              <b>liste des articles du site</b>.
            </p>
            <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
              <ArticlesList />
            </div>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.MOTIFS_LIST.id}
          header={{ content: STYLEGUIDE_SECTIONS.MOTIFS_LIST.title, level: 2 }}
          tags={[
            "composant",
            "itératif",
            "spécifique à la page motifs",
            "contenu de row",
          ]}
        >
          <>
            <p>
              Sur la page <InternalLink page={PAGES.MOTIFS} />, affiche la{" "}
              <b>liste des articles du site</b>.
            </p>
            <div style={{ maxHeight: "100vh", overflow: "scroll" }}>
              <MotifsList motifs={pageContext.motifs} />
            </div>
          </>
        </Row>
        <Row
          id={STYLEGUIDE_SECTIONS.BADGES_LIST.id}
          header={{ content: STYLEGUIDE_SECTIONS.BADGES_LIST.title, level: 2 }}
          tags={["composant", "iteratif"]}
          backgroundColor={COLORS.FLOWER}
        >
          <>
            <p>
              Affiche une <b>liste inline</b> de <b>badges pilules</b>.
            </p>
            <p>
              La <b>couleur des badges</b> peut être{" "}
              <b>paramétrée individuellement</b> au besoin.
            </p>
            <BadgesList
              badges={[
                { label: "Badge 1", color: COLORS.LIGHT },
                { label: "Badge 2", color: COLORS.MIST },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Styleguide;
