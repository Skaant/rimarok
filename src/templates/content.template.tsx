import "../styles/global.scss";
import React from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { PageProps } from "gatsby";
import {
  BlockSwitch,
  buildExtendedBlocks,
  DefaultTemplateContext,
} from "nebula-atoms";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { GlobalPageContext } from "../types/GlobalPageContext";
import { COLORS } from "../data/colors";
import Row from "../components/Row";

export type ContentTemplateContext = GlobalPageContext & {
  title: string;
  header: {
    color: COLORS;
    backSectionLabel: string;
    backSectionLink: string;
  };
  blocks: BlockObjectResponse[];
};

/**
 * Used for motifs and articles.
 *
 * Middle layer between RIMAROK pages template and
 *  nebula-atoms templating system.
 */
function ContentTemplate({
  pageContext: {
    title,
    header: { color: headerColor, backSectionLabel, backSectionLink },
    blocks,
    ...globalPageContext
  },
}: PageProps<undefined, ContentTemplateContext>) {
  const _blocks = buildExtendedBlocks(blocks);
  return (
    <Layout
      head={{
        title,
      }}
      containerType="container"
      {...globalPageContext}
    >
      <>
        <PageHeader
          title={title}
          backgroundColor={headerColor}
          paddingY={5}
          linksMenu={{
            links: [
              {
                label: backSectionLabel,
                link: backSectionLink,
              },
            ],
          }}
        />
        <Row>
          <>
            {_blocks.map((block) => (
              <BlockSwitch key={block.id} block={block} />
            ))}
          </>
        </Row>
      </>
    </Layout>
  );
}

export default ContentTemplate;
