import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import LinksMenu from "../components/LinksMenu";
import PageHeader from "../components/PageHeader";
import Row from "../components/Row";
import { COLORS } from "../data/colors";
import { PAGES, PAGES_DATA } from "../data/pages";
import { GlobalPageContext } from "../types/GlobalPageContext";
import { Motif } from "../types/Motif";
import { MOTIFS_SECTIONS } from "./_pages/motifs.template";

export type LocationTemplateProps = GlobalPageContext & {
  location: string;
  locationMotifs: Motif[];
};

export default function LocationTemplate({
  pageContext: { location, locationMotifs: motifs, ...globalPageContext },
}: PageProps<undefined, LocationTemplateProps>) {
  return (
    <Layout head={{ title: `Motif ${location}` }} {...globalPageContext}>
      <>
        <PageHeader
          title={location}
          backgroundColor={COLORS.ABYSS}
          paddingY={5}
          linksMenu={{
            links: [
              {
                label: "Retour à la liste des motifs",
                link: `${PAGES_DATA[PAGES.MOTIFS].path}#${
                  MOTIFS_SECTIONS["LISTE"].id
                }`,
                color: COLORS.LAGOON,
              },
            ],
          }}
        />
        {motifs && motifs.length ? (
          <Row
            header={{
              level: 2,
              content: "Motifs associés au lieu",
            }}
            paddingY={2}
          >
            <>
              <div>
                <LinksMenu
                  links={motifs
                    .sort(
                      (a, b) =>
                        ((a.index || -1) === -1 ? 8888 : a.index || -1) -
                        ((b.index || -1) === -1 ? 8888 : b.index || -1)
                    )
                    .map((motif) => ({
                      link: `/motifs/${motif.slug}`,
                      label: motif.name,
                      color: COLORS.FLOWER,
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
