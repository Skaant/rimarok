import { PageProps } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import { Motif } from "../types/Motif";
import Row from "../components/Row";
import LinksMenu from "../components/LinksMenu";
import BadgesList from "../components/BadgesList";
import { COLORS } from "../data/colors";
import { buildExtendedBlocks, BlockSwitch } from "nebula-atoms";
import { GlobalPageContext } from "../types/GlobalPageContext";
import { PAGES, PAGES_DATA } from "../data/pages";
import { MOTIFS_SECTIONS } from "./_pages/motifs.template";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type MotifTemplateProps = GlobalPageContext & {
  motif: Omit<Motif, "related"> & {
    related?: Motif[];
  };
  blocks: BlockObjectResponse[];
};

function MotifTemplate({
  pageContext: {
    motif: { name, summary, related, synonyms },
    blocks,
    ...globalPageContext
  },
}: PageProps<undefined, MotifTemplateProps>) {
  const _blocks = buildExtendedBlocks(blocks);
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
            {_blocks.map((block) => (
              <BlockSwitch key={block.id} block={block} contents={[]} />
            ))}
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
