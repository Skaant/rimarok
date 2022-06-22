import * as React from "react";
import FullScreenTitle from "../components/FullScreenTitle";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import Carousel from "../components/Carousel";
import LinksMenu from "../components/LinksMenu";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import Project from "../components/Project";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

const Accueil = () => {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <FullScreenTitle
          title={title}
          subtitle={WEBSITE_DATA.TITLE}
          backgroundColor={COLORS.FLOWER}
          height={"100vh"}
          titleSize={"big"}
        />
        <Row
          header={{
            level: 2,
            content: "Performance et économies",
          }}
        >
          <>
            <Quote displayHeading={4}>
              <>
                <p>
                  Internet est un espace d’émancipation et de liberté, il
                  devrait d’abord être soutenable et inclusif.
                </p>
              </>
            </Quote>
            <p>
              À 23 ans, <b>en 2016</b>, mon Master Informatique et Gestion
              d’Entreprise en poche,{" "}
              <b>
                j’ai commencé l’activité de développeur web comme indépendant
              </b>
              .
            </p>
            <LinksMenu
              links={[
                {
                  label: "Découvrir ma prestation",
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                },
              ]}
            />
            <p>
              Depuis, <b>j’exerce toujours la même activité</b>, en recherchant
              les projets les plus intéressants et les équipes les plus
              bienveillantes.
            </p>
            <p>
              Spécialisé <b>full-stack JavaScript</b> (et passionné par ce que
              l'on peut faire sur internet), j'ai aussi développé ma{" "}
              <b>
                sensibilité au sujet de l’éco-conception et de l’informatique
                durable
              </b>
              .
            </p>
            <p>
              À la rencontre de ces deux sujets naît une{" "}
              <b>puissante efficience</b>, l'union de{" "}
              <b>motifs de conception</b> éprouvés et d'un objectif d'
              <b>économie maximale</b> (ressources informatiques et
              financières).
            </p>
            <LinksMenu
              links={[
                {
                  label: "Expertise full-stack JavaScript",
                  link: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
                },
                {
                  label: "Bonnes pratiques d'éco-conception",
                  link: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path,
                },
              ]}
            />
            <p>J’ai une personnalité créative, vaillante et sociale.</p>
            <p>On a dit de moi :</p>
            <Quote
              displayHeading={6}
              legend={{
                author:
                  "Laurent Gaveau, chef du pôle applicatif à l'Université de Reims",
              }}
            >
              <>
                <p>
                  Autonome, volontaire et dynamique, Romaric Ruga dispose
                  d’excellentes compétences organisationnelles, techniques et
                  relationnelles. Il maitrise les langages de programmation,
                  s’est approprié rapidement notre Système d’Informations et
                  s’est intégré parfaitement dans l’équipe et dans son contexte
                  professionnel.
                </p>
              </>
            </Quote>
            <LinksMenu
              links={[
                {
                  label: "Entrer en contact",
                  link: PAGES_DATA[PAGES.PRESTATION].path,
                },
              ]}
            />
          </>
        </Row>
        <Row backgroundColor={COLORS.ABYSS} colClassName="text-white">
          <>
            <Carousel
              id="projets-professionnels" // Change this ID /!\
              controlsColor={COLORS.WHITE}
              children={[
                <Project
                  title="MOBILIS PRO / MEDIARTIS"
                  scope="full-stack"
                  tags={[
                    "nest",
                    "typescript",
                    "jest",
                    "e2e",
                    "vue",
                    "bootstrap",
                  ]}
                  date="Juin 2021 - aujourd'hui"
                >
                  <>
                    <p>
                      Bientôt un an de missions cumulées sur le projet novateur
                      MEDIARTIS.
                    </p>
                    <p>
                      J'interviens pour étendre les fonctionnalités du produit,
                      sous un angle totalement full-stack (Nest TS / Vue) :
                    </p>
                    <ul>
                      <li>Stockage de données RGPD,</li>
                      <li>
                        Transition d'un système de rôles à un système de
                        permissions,
                      </li>
                      <li>
                        Ouverture du produit à un usage comme API externe,
                      </li>
                      <li>Tests unitaires et e2e,</li>
                      <li>Mises à jour d'environnement et de sécurité ...</li>
                    </ul>
                  </>
                </Project>,
                <Project
                  title="AGENCE NOUNOURS / CREST JAZZ"
                  date="Septembre 2021 - Février 2022"
                  scope="full-stack"
                  tags={["wordpress", "acf", "php", "bootstrap", "sass"]}
                >
                  <>
                    <p>
                      Intégration d'un WordPress et développement du thème du
                      nouveau site de l'association et festival Crest Jazz.
                    </p>
                    <p>Détails de la stack :</p>
                    <ul>
                      <li>GitHub Actions (CD),</li>
                      <li>Webpack front : SCSS / JS,</li>
                      <li>Racine Bootstrap, généreusement customisé,</li>
                      <li>PHP + ACF.</li>
                    </ul>
                  </>
                </Project>,
              ]}
            />
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
