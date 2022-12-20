import { PageProps } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import { Motif } from "../types/Motif";
import Row from "../components/Row";
import LinksMenu from "../components/LinksMenu";
import BadgesList from "../components/BadgesList";
import { COLORS } from "../data/colors";
import { ExtendedBlockObjectResponse, PureBlocksRenderer } from "statikon";
import { GlobalPageContext } from "../types/GlobalPageContext";
import { PAGES, PAGES_DATA } from "../data/pages";
import { MOTIFS_SECTIONS } from "./_pages/motifs.template";

export type MotifTemplateProps = GlobalPageContext & {
  motif: Omit<Motif, "related"> & {
    related?: Motif[];
  };
  blocks?: ExtendedBlockObjectResponse[];
};

function MotifTemplate({
  pageContext: {
    motif: { name, summary, related, locations, synonyms },
    blocks,
    ...globalPageContext
  },
}: PageProps<undefined, MotifTemplateProps>) {
  return (
    <Layout head={{ title: `Motif ${name}` }} {...globalPageContext}>
      <>
        <PageHeader
          title={name}
          backgroundColor={COLORS.SUN}
          paddingY={5}
          {...(summary ? { subtitle: summary } : {})}
          linksMenu={{
            links: [
              {
                label: "Retour à la liste des motifs",
                link: `${PAGES_DATA[PAGES.MOTIFS].path}#${
                  MOTIFS_SECTIONS["LISTE"].id
                }`,
                color: COLORS.ABYSS,
              },
            ],
          }}
        />
        {locations && locations.length ? (
          <Row
            header={{
              level: 2,
              content: "Lieux",
            }}
            paddingY={2}
          >
            <>
              <div>
                <LinksMenu
                  links={locations.map((location) => ({
                    link: `/motifs/lieux/${location
                      .replace(/[\s']/g, "-")
                      .toLowerCase()}`,
                    label: location,
                    color: COLORS.ABYSS,
                  }))}
                />
              </div>
            </>
          </Row>
        ) : (
          ""
        )}
        {synonyms && synonyms.length ? (
          <Row
            header={{
              level: 2,
              content: "Synonymes",
            }}
            paddingY={2}
            className="pb-5"
          >
            <>
              <div>
                <BadgesList
                  badges={synonyms.map((synonym) => ({
                    label: synonym,
                    color: COLORS.MIST,
                  }))}
                />
              </div>
            </>
          </Row>
        ) : (
          ""
        )}
        <Row>
          <>
            {blocks && blocks.length ? (
              <PureBlocksRenderer blocks={blocks} />
            ) : (
              ""
            )}
          </>
        </Row>
        {related && related.length ? (
          <Row
            header={{
              level: 2,
              content: `Relations`,
            }}
            paddingY={2}
          >
            <>
              <LinksMenu
                links={related.map(({ name, slug }) => ({
                  label: name,
                  link: "/motifs/" + slug,
                  color: COLORS.FLOWER,
                }))}
              />
            </>
          </Row>
        ) : (
          ""
        )}
      </>
    </Layout>
  );
}

export default MotifTemplate;
