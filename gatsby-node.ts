import { Client } from "@notionhq/client";
import type { GatsbyNode } from "gatsby";
import path from "path";
import { DatabasePage, getDatabase } from "./src/helpers/notion/getDatabase";
import { motifFormatter } from "./src/helpers/notion/_page-formatters/motif.formatter";
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
    path: "/accueil",
    component: path.resolve("./src/templates/_pages/accueil.template.tsx"),
    context: globalPageContext,
  });

  motifs
    .filter(({ name }) => name)
    .forEach(({ related, ...motif }) => {
      createPage<MotifTemplateProps>({
        path: "/motifs/" + motif.slug,
        component: path.resolve("./src/templates/motif.template.tsx"),
        context: {
          ...globalPageContext,
          motif: {
            ...motif,
            related: related?.map((id) => _motifsById[id]),
          },
          blocks: _motifPagesById[motif.id].blocks,
        },
      });
    });
};
