import * as React from "react";
import Layout from "../components/Layout";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";

const { title } = PAGES_DATA[PAGES.ACCUEIL];

const Accueil = () => {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <Row backgroundColor={COLORS.FLOWER}>
          <>
            <h1>{title}</h1>
            <p>{WEBSITE_DATA.TITLE}</p>
          </>
        </Row>
        <Row>
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
            <div /** @todo Buttons menu */>
              <button>Découvrir ma prestation</button>
            </div>
            <p>
              Depuis, <b>j’exerce toujours la même activité</b>, en recherchant
              les projets les plus intéressants et les équipes les plus
              bienveillantes.
            </p>
            <p>
              Spécialisé <b>full-stack JavaScript</b>, j'ai aussi développé ma{" "}
              <b>
                sensibilité au sujet de l’éco-conception et de l’informatique
                durable
              </b>
              .
            </p>
            <div /** @todo Buttons menu */>
              <button>Expertise full-stack JavaScript</button>
              <button>Bonnes pratiques d'éco-conception</button>
            </div>
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
            <div /** @todo Buttons menu */>
              <button>Entrer en contact</button>
            </div>
          </>
        </Row>
      </>
    </Layout>
  );
};

export default Accueil;
