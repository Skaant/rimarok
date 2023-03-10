import { Client } from "@notionhq/client";
import type { GatsbyNode } from "gatsby";
import path from "path";
import { PAGES, PAGES_DATA } from "./src/data/pages";
import { DatabasePage, getDatabase } from "./src/helpers/notion/getDatabase";
import { motifFormatter } from "./src/helpers/notion/_page-formatters/motif.formatter";
import { LocationTemplateProps } from "./src/templates/location.template";
import { MotifTemplateProps } from "./src/templates/motif.template";
import { GlobalPageContext } from "./src/types/GlobalPageContext";
import { Motif } from "./src/types/Motif";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  if (!process.env.MOTIFS_DATABASE_ID)
    throw new Error("Missing process.env.MOTIFS_DATABASE_ID");

  const motifPages = await getDatabase(notion, process.env.MOTIFS_DATABASE_ID);
  const _motifPagesById = motifPages.reduce(
    (acc, page) => ({
      ...acc,
      [page.id]: page,
    }),
    {} as { [id: string]: DatabasePage }
  );
  const motifs = motifPages.map(motifFormatter);
  const _motifsById = motifs.reduce(
    (acc, motif) => ({
      ...acc,
      [motif.id]: motif,
    }),
    {} as { [id: string]: Motif }
  );

  const globalPageContext: GlobalPageContext = {
    motifs,
    footer: {
      motifs: motifs
        .filter(({ index }) => index !== -1)
        .sort(({ index: a }, { index: b }) => (a as number) - (b as number))
        .slice(0, 10),
    },
  };

  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.ACCUEIL].path,
    component: path.resolve("./src/templates/_pages/accueil.template.tsx"),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.PRESTATION].path,
    component: path.resolve("./src/templates/_pages/prestation.template.tsx"),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.PRESTATION_INGENIERIE_WEB].path,
    component: path.resolve(
      "./src/templates/_pages/prestation/ingenierie-web.template.tsx"
    ),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.PRESTATION_ECO_CONCEPTION].path,
    component: path.resolve(
      "./src/templates/_pages/prestation/eco-conception.template.tsx"
    ),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.MOTIFS].path,
    component: path.resolve("./src/templates/_pages/motifs.template.tsx"),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.BLOG].path,
    component: path.resolve("./src/templates/_pages/blog.template.tsx"),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: `${PAGES_DATA[PAGES.BLOG].path}/1-motifs-js-publier-un-module-npm`,
    component: path.resolve(
      "./src/templates/_pages/blog/1-motifs-js-publier-un-module-npm.tsx"
    ),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: `${PAGES_DATA[PAGES.BLOG].path}/8-refonte-site-contenu-gatsby`,
    component: path.resolve(
      "./src/templates/_pages/blog/8-refonte-site-contenu-gatsby.tsx"
    ),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: `${PAGES_DATA[PAGES.BLOG].path}/9-gatsby-notion-npm-module-statikon`,
    component: path.resolve(
      "./src/templates/_pages/blog/9-gatsby-notion-npm-module-statikon.tsx"
    ),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.STYLEGUIDE].path,
    component: path.resolve("./src/templates/_pages/styleguide.template.tsx"),
    context: globalPageContext,
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.MENTIONS_LEGALES].path,
    component: path.resolve(
      "./src/templates/_pages/mentions-legales.template.tsx"
    ),
    context: globalPageContext,
  });

  motifs
    .filter(({ name }) => name)
    .forEach(({ related, ...motif }) => {
      const _related = related
        ?.map((id) => _motifsById[id])
        .filter((motif) => motif);
      createPage<MotifTemplateProps>({
        path: "/motifs/" + motif.slug,
        component: path.resolve("./src/templates/motif.template.tsx"),
        context: {
          ...globalPageContext,
          motif: {
            ...motif,
            ...(_related && _related.length ? { related: _related } : {}),
          },
          blocks: _motifPagesById[motif.id].blocks,
        },
      });
    });

  const locationsProps = Object.values(
    motifs
      .filter(({ locations }) => locations)
      .reduce((acc, motif) => {
        motif.locations?.forEach((location) => {
          if (!acc[location]) {
            acc[location] = {
              location,
              locationMotifs: [motif],
            };
          } else {
            acc[location].locationMotifs.push(motif);
          }
        });
        return acc;
      }, {} as { [key: string]: Pick<LocationTemplateProps, "location" | "locationMotifs"> })
  );

  locationsProps.forEach(({ location, locationMotifs }) => {
    createPage<LocationTemplateProps>({
      path: `/motifs/lieux/${location.replace(/[\s']/g, "-")}`,
      component: path.resolve("./src/templates/location.template.tsx"),
      context: {
        ...globalPageContext,
        location,
        locationMotifs,
      },
    });
  });
};
