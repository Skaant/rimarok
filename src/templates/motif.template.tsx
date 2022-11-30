import { PageProps } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import { Motif } from "../types/Motif";
import Row from "../components/Row";
import LinksMenu from "../components/LinksMenu";
import BadgesList from "../components/BadgesList";
import { COLORS } from "../data/colors";

export type MotifTemplateProps = {
  motif: Omit<Motif, "related"> & {
    related?: Motif[];
  };
};

function MotifTemplate({
  pageContext: {
    motif: { name, summary, related, tags, synonyms },
  },
}: PageProps<undefined, MotifTemplateProps>) {
  return (
    <Layout head={{ title: `Le motif ${name}` }}>
      <>
        <PageHeader
          title={name}
          backgroundColor={COLORS.SUN}
          paddingY={5}
          {...(summary ? { subtitle: summary } : {})}
        />
        {tags && tags.length ? (
          <Row
            header={{
              level: 2,
              content: "Étiquettes",
            }}
            paddingY={2}
          >
            <>
              <div>
                <BadgesList
                  badges={tags.map((tag) => ({
                    label: tag,
                    color: COLORS.ABYSS,
                  }))}
                />
              </div>
            </>
          </Row>
        ) : (
          ""
        )}
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
                links={related.map(({ name }) => ({
                  label: name,
                  link: "/motifs/" + name.toLowerCase().replaceAll(" ", "-"),
                  color: COLORS.FLOWER,
                }))}
              />
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
      </>
    </Layout>
  );
}

export default MotifTemplate;
