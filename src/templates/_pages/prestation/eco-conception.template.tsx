import React from "react";
import PageHeader from "../../../components/PageHeader";
import Layout from "../../../components/Layout";
import Quote from "../../../components/Quote";
import Row from "../../../components/Row";
import { PAGES, PAGES_DATA } from "../../../data/pages";
import Section from "../../../types/Section";
import { COLORS } from "../../../data/colors";
import { Link, PageProps } from "gatsby";
import LinksMenu from "../../../components/LinksMenu";
import getArticleLink from "../../../helpers/getArticleLink";
import { GlobalPageContext } from "../../../types/GlobalPageContext";

const PAGE_ID = PAGES.PRESTATION_ECO_CONCEPTION;
const { title } = PAGES_DATA[PAGE_ID];

export const PRESTATION_ECO_CONCEPTION_SECTIONS: { [key: string]: Section } = {
  INTRO_PAGE: {
    id: "c-est-quoi-eco",
    title: 'C\'est quoi "éco" ?',
  },
  VALEURS: {
    id: "mes-valeurs",
    title: "Mes valeurs",
  },
  AXES_TRAVAIL: {
    id: "axes-de-travail-vers-la-sobriete",
    title: "Axes de travail vers la sobriété",
  },
  BONNES_PRATIQUES: {
    id: "introduction-bonnes-pratiques",
    title: "Introduction aux bonnes pratiques",
  },
  REFERENTIELS: {
    id: "referentiels-outils-eco-conception",
    title: "Référentiels et outils pour l'éco-conception",
  },
  EXEMPLE_SITE: {
    id: "l-exemple-de-ce-site",
    title: "L'exemple de ce site",
  },
};

function EcoConception({
  pageContext,
}: PageProps<undefined, GlobalPageContext>) {
  return (
    <Layout
      head={{
        title,
        description:
          "Le numérique n'est pas exempt d'impact matériel. En implémentant les bonnes pratiques d'éco-conception logicielle, telles que formalisées par le collectif Green-IT, vos applicatifs peuvent limiter leur impact négatif sur l'environnement.",
      }}
      {...pageContext}
    >
      <>
        <PageHeader
          title={title}
          subtitle="Réduire l'impact des applicatifs web"
          tableOfContents={{
            contents: PRESTATION_ECO_CONCEPTION_SECTIONS,
            linkColor: COLORS.LIGHT,
          }}
          backgroundColor={COLORS.SUN}
          linksMenu={{
            links: [
              {
                link: PAGES_DATA[PAGES.PRESTATION].path,
                label: "Retour à ma prestation",
                color: COLORS.LIGHT,
              },
            ],
          }}
        />
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={["économie", "écologie", "pragmatisme", "sobriété"]}
        >
          <>
            <Quote displayHeading={1} backgroundColor={COLORS.SUN}>
              <>
                <p>Moins égal mieux !</p>
              </>
            </Quote>
            <p>
              "Éco" c'est à la fois <b>économique et écologique</b>.
            </p>
            <p>
              Quand on considère une application web de façon holistique, on se
              rend compte que <b>moins égal plus</b> :
            </p>
            <p>
              <b>Moins de fonctionnalités inutiles</b>, moins de bugs, moins de
              coûts car <b>plus d'efficience</b> (résultat obtenu pour une
              quantité d'énergie), plus de rapidité et plus de satisfaction
              utilisateur, plus de revenus.
            </p>
            <p>
              L'éco-conception permet de{" "}
              <b>
                garder à l'oeil les métriques financières mais aussi
                environnementales
              </b>
              .
            </p>
            <p className="display-6">
              La démarche repose sur un ensemble de{" "}
              <a
                href={`#${PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.id}`}
              >
                bonnes pratiques
              </a>
              , ainsi que sur l'
              <b>
                interrogation régulière de l'utilité de chacune des
                fonctionnalités
              </b>{" "}
              par rapport à leurs coûts.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.title,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={["web pour la société", "holistique", "impact positif"]}
        >
          <>
            <p>
              J'aime la <b>simplicité</b>, la <b>sobriété</b>.
            </p>
            <p>
              Je pense que ce sont{" "}
              <b>deux axes qui peuvent soigner notre société</b>.
            </p>
            <p className="display-6">
              À l'échelle du <b>développement web</b>, j'aspire à{" "}
              <b>générer plus d'impacts positifs</b> que de pollution,
              d'inégalités et de violence.
            </p>
            <p>
              L'éco-conception me permet d'
              <b>
                allier mes valeurs environnementales avec l'univers de la tech
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.title,
          }}
          backgroundColor={COLORS.LIGHT}
          tags={[
            "pertinence",
            "adéquation",
            "non-exponentialité",
            "gestion des données",
          ]}
        >
          <>
            <p className="display-6">
              Pour <b>réduire les besoins et les coûts</b> d'une application est
              la <b>chasse aux fonctionnalités superflues</b>.
            </p>
            <p>
              <b>
                Rien n'est moins cher et plus écologique que la fonctionnalité à
                faible ROI qu'on n'a pas développé.
              </b>
            </p>
            <p>
              Le second axe de travail est{" "}
              <b>l'inhibition des facteurs exponentiels</b>,c'est à dire éviter
              la multiplication de calculs.
            </p>
            <p>
              Le troisième axe est <b>la politique de gestion de données</b> en
              évitant de remplir de coûteux espaces de stockage avec des
              déchets.
            </p>
            <p>
              En conclusion, le mieux c'est de{" "}
              <b>
                traiter et développer uniquement ce dont les métiers ont besoin
              </b>
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.title,
          }}
          backgroundColor={COLORS.LAGOON}
          tags={[
            "pratiques",
            "empreinte environnementale",
            "métriques",
            "référentiels",
          ]}
        >
          <>
            <p>
              Dans son livre{" "}
              <b>Éco-conception web / les 115 bonnes pratiques</b>,{" "}
              <a href="https://www.linkedin.com/in/fbordage" target="_blank">
                Fréderic Bordage
              </a>{" "}
              du collectif{" "}
              <a href="https://greenit.fr/" target="_blank">
                Green-IT.fr
              </a>{" "}
              présente des conseils activables pour <b>accélerer son site</b> et{" "}
              <b>réduire (entre autres) son empreinte carbone</b>.
            </p>
            <p>
              Ce <b>référentiel </b>, ainsi que{" "}
              <b>celui élaboré par le gouvernement</b>, sont disponible en ligne
              comme listé
              <a
                href={"#" + PRESTATION_ECO_CONCEPTION_SECTIONS.REFERENTIELS.id}
              >
                {" "}
                dans la section ci-dessous
              </a>
              .
            </p>
            <p className="display-6">
              J'ai eu l'occasion de <b>mettre en application</b> un certain
              nombre de ces bonnes pratiques{" "}
              <b>dans des contextes profesionnels</b> et personnels.
            </p>
            <p>
              Il reste aujourd'hui relativement{" "}
              <b>
                ardu de pouvoir mesurer avec exhaustivités les performances et
                dépenses
              </b>{" "}
              holistiques d'une application.
            </p>
            <p>
              Toutefois, sur l'implémentation des bonnes pratiques
              d'éco-conception, des{" "}
              <b>
                indicateurs simples peuvent être utilisés pour constater la
                réduction de certains des coûts de l'application
              </b>
              .
            </p>
            <p>
              On peut citer : la <b>bande-passante</b> utilisée, le nombre de{" "}
              <b>requêtes</b>, l'<b>usage du CPU</b> front et back ou encore l'
              <b>espace de stockage</b> alloué.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.REFERENTIELS.id}
          header={{
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.REFERENTIELS.title,
            level: 3,
          }}
          backgroundColor={COLORS.LAGOON}
          paddingY={0}
          collapsible={true}
          stars={true}
        >
          <>
            <p className="display-6">
              Preuves d'une <b>prise de conscience</b> des enjeux du numérique
              responsable, et d'une <b>volonté de passage à l'action</b>, listes
              de bonnes pratiques et outils ont vu le jour ces dernières années.
            </p>
            <p>
              Les <b>deux principaux référentiels</b> sur lesquels je base{" "}
              <b>mon travail vers la sobriété numérique</b> sont :
            </p>
            <ul>
              <li>
                <a href="https://github.com/cnumr/best-practices">
                  Les 115 bonnes pratiques du collectif Green-IT.fr
                </a>
                , disponible en ligne sur le{" "}
                <b>
                  répertoire GitHub du Collectif Conception Numérique
                  Responsable
                </b>
                ,
              </li>
              <li>
                <a href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/">
                  Le référentiel général d'écoconception de services numériques
                  (RGESN)
                </a>
                , mis à disposition par la{" "}
                <b>mission interministérielle du numérique responsable</b>{" "}
                depuis 29 novembre 2022.
              </li>
            </ul>
            <p className="display-6">
              <b>L'éco-index</b>, outil d'
              <b>analyse des performances écologiques du front-end</b>, se
              décline en une{" "}
              <a href="https://www.ecoindex.fr/">application web</a> et un
              plugin pour navigateur.{" "}
              <a href="https://www.greenit.fr/2023/03/07/ecoindex-mise-a-jour-majeur-de-la-boite-a-outils/">
                Plus d'infos ici
              </a>
              .
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.title,
          }}
          tags={["jamstack", "site statique", "gatsby", "minimalisme"]}
        >
          <>
            <p className="display-6">
              <Link to="/">RIMAROK.com</Link> s'inscrit totalement dans la
              démarche <b>Jamstack</b>, une approche pragmatique de l'accès au
              contenu.
            </p>
            <p>
              <b>Site statique</b> généré grâce au <b>framework React Gatsby</b>
              , RIMAROK.com est <b>construit et déployé automatiquement</b>,
              seulement lors d'un merge sur la branche principale.
            </p>
            <p>
              Je <b>réduis mes dépendences</b> (ex: build conditionnel de
              Bootstrap) et j'
              <b>évite les fichiers volumineux</b>.
            </p>
            <p className="display-6">
              Extrêment <b>économique à requêter</b>, j'
              <b>optimise ainsi mes dépenses</b>.
            </p>
            <LinksMenu
              links={[
                {
                  link: getArticleLink(7),
                  label: "Plus sur le projet de refonte du site",
                },
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
}

export default EcoConception;
