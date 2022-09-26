import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import Row from "../components/Row";
import { PAGES, PAGES_DATA } from "../data/pages";
import Section from "../types/Section";
import { COLORS } from "../data/colors";

const PAGE_ID = PAGES.MENTIONS_LEGALES;
const { title } = PAGES_DATA[PAGE_ID];

const MENTIONS_LEGALES_SECTIONS: { [key: string]: Section } = {
  MENTIONS_OBLIGATOIRES_SITE: {
    id: "mentions-obligatoires-site",
    title: "Mentions obligatiures du site",
  },
};

function MentionsLegales() {
  return (
    <Layout
      head={{
        title,
      }}
    >
      <>
        <PageHeader
          title={title}
          subtitle="Réflexions et recherches sur le développement"
          tableOfContents={{ contents: MENTIONS_LEGALES_SECTIONS }}
        />
        <Row
          id={MENTIONS_LEGALES_SECTIONS.MENTIONS_OBLIGATOIRES_SITE.id}
          header={{
            level: 2,
            content: MENTIONS_LEGALES_SECTIONS.MENTIONS_OBLIGATOIRES_SITE.title,
          }}
          backgroundColor={COLORS.FLOWER}
          tags={["motivation", "partage", "gestion des connaissances"]}
        >
          <>
            <p className="small mb-5">
              <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228">
                Quelles sont les mentions obligatoires sur le site internet d'un
                professionnel ? (service-public.fr)
              </a>
            </p>
            <dl>
              <dt>Nom et prénom</dt>
              <dd>Romaric Ruga</dd>
              <dt>Adresse</dt>
              <dd>
                751 route des Meuniers, St Philibert, 38380 St Pierre
                d'Entremont
              </dd>
              <dt>SIRET</dt>
              <dd>822 765 764 00029</dd>
              <dt>Numéro de téléphone</dt>
              <dd>
                <a id="contact-phone" href="#">
                  Cliquez pour dévoiler
                </a>
              </dd>
              <dt>Adresse de courrier électronique</dt>
              <dd>
                <a id="contact-mail" href="#">
                  Cliquez pour dévoiler
                </a>
              </dd>
              <dt>Numéro d'identification à la TVA</dt>
              <dd>FR 93822765764</dd>
              <dt>Hébèrgement du site</dt>
              <dd>OVH, 2 rue Kellermann, 59100 Roubaix (+33-8-203-203-63)</dd>
            </dl>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default MentionsLegales;
