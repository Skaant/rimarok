import React from "react";
import { PRESTATION_SECTIONS } from ".";
import FullScreenTitle from "../../components/FullScreenTitle";
import Layout from "../../components/Layout";
import Quote from "../../components/Quote";
import Row from "../../components/Row";
import { PAGES, PAGES_DATA } from "../../data/pages";
import getInternalLink from "../../helpers/getInternalLink";
import Section from "../../types/Section";

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
    id: "bonnes-pratiques",
    title: "Bonnes pratiques",
  },
  EXEMPLE_SITE: {
    id: "l-exemple-de-ce-site",
    title: "L'exemple de ce site",
  },
};

function EcoConception() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle="Réduire l'impact des applicatifs web"
        />
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.INTRO_PAGE.title,
          }}
        >
          <>
            <p>Éco c'est à la fois économique et écologique.</p>
            <p>
              Bizarrement, quand on considère une application web de{" "}
              <a
                href={getInternalLink(
                  PAGES.PRESTATION,
                  PRESTATION_SECTIONS.WEB_HOLISTIQUE
                )}
              >
                façon holistique
              </a>
              , on se rend compte que <b>moins égal plus</b>.
            </p>
            <Quote displayHeading={1}>
              <p>- = +</p>
            </Quote>
            <p>
              L'éco-conception permet de garder à l'oeil les métriques
              financières mais aussi environnementales.
            </p>
            <p>
              La démarche repose sur un ensemble de{" "}
              <a
                href={`#${PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES}`}
              >
                bonnes pratiques
              </a>
              , ainsi que sur l'interrogation régulière de l'utilité de chacune
              des fonctionnalités qui engendrent des coûts.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.VALEURS.title,
          }}
        >
          <>
            <p>J'aime la simplicité, la sobriété.</p>
            <p>
              Je pense que ce sont là les deux axes qui peuvent soigner notre
              société.
            </p>
            <p>
              À l'échelle du développement web, j'aspire à générer plus
              d'impacts positifs que de pollution et de violence.
            </p>
            <p>
              L'éco-conception me permet d'allier mes valeurs environnementales
              avec l'univers de la tech.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.AXES_TRAVAIL.title,
          }}
        >
          <>
            <p>
              L'angle d'attaque majeur pour réduire les besoins et coûts d'une
              application, c'est <b>la chasse aux fonctionnalités superflues</b>
              .
            </p>
            <p>
              Rien est moins cher et plus écologique que la
              <i>feature</i> qu'on a pas développé.
            </p>
            <p>
              Le second axe de travail, c'est{" "}
              <b>l'inhibition des facteurs exponentiels</b>.
            </p>
            <p>
              Le troisième axe c'est <b>la politique de gestion de données</b>,
              et comment éviter de remplir ses (couteux et précieux) espaces de
              stockage avec des déchêts.
            </p>
            <p>
              Mais bon, le mieux c'est encore de{" "}
              <b>ne développer que ce dont les métiers ont besoin</b>.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.BONNES_PRATIQUES.title,
          }}
        >
          <>
            <p>
              Dans son livre{" "}
              <i>Éco-conception web / les 115 bonnes pratiques</i>,{" "}
              <a href="https://www.linkedin.com/in/fbordage" target="_blank">
                Fréderic Bordage
              </a>{" "}
              du collectif{" "}
              <a href="https://greenit.fr/" target="_blank">
                Green-IT
              </a>
              présente des conseils activables pour accélerer son site et
              réduire (entre autres) son empreinte carbone.
            </p>
            <p>
              J'ai eu l'occasion de mettre en application un certain nombre de
              ces bonnes pratiques dans des contextes profesionnels et
              personnels.
            </p>
            <p>
              Il reste aujourd'hui relativement ardu de pouvoir mesurer avec
              exhaustivités les performances et dépenses holistiques d'une
              application.
            </p>
            <p>
              Toutefois, sur l'implémentation des bonnes pratiques
              d'éco-conception, des indicateurs simples peuvent être utilisés
              pour constater la réduction de certains coûts de l'application.
            </p>
          </>
        </Row>
        <Row
          id={PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.id}
          header={{
            level: 2,
            content: PRESTATION_ECO_CONCEPTION_SECTIONS.EXEMPLE_SITE.title,
          }}
        >
          <>
            <p>RIMAROK.com s'inscrit totalement dans la Jamstack.</p>
            <p>
              Fichiers statiques générés grâce au framework React Gatsby, le
              site est construit et déployé uniquement lors d'un merge sur la
              branche principale.
            </p>
            <p>
              Extrêment économique à requêter, j'ai minimisé les dépendances et
              fichiers volumineux.
            </p>
            <p></p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default EcoConception;
