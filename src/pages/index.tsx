import * as React from "react";
import FullScreenTitle from "../components/FullScreenTitle";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Quote from "../components/Quote";
import { PAGES, PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import LinksMenu from "../components/LinksMenu";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import Footer from "../components/Footer";

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
              Spécialisé <b>full-stack JavaScript</b>, j'ai aussi développé ma{" "}
              <b>
                sensibilité au sujet de l’éco-conception et de l’informatique
                durable
              </b>
              .
            </p>
            <p>
              À la rencontre de ces deux sujets naît une{" "}
              <b>puissante efficience</b>, rencontre de{" "}
              <b>motifs de conception</b> éprouvés et d'un objectif d'
              <b>économie maximale</b> (ressources informatiques et finance).
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
        <Footer />
      </>
    </Layout>
  );
};

export default Accueil;
