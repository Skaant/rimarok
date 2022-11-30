import { Client } from "@notionhq/client";
import type { GatsbyNode } from "gatsby";
import path from "path";
import { getDatabase } from "./src/helpers/notion/getDatabase";
import { motifFormatter } from "./src/helpers/notion/_page-formatters/motif.formatter";
import { MotifTemplateProps } from "./src/templates/motif.template";
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
  const motifs = motifPages.map(motifFormatter);
  const _motifsByIds = motifs.reduce(
    (acc, motif) => ({
      ...acc,
      [motif.id]: motif,
    }),
    {} as { [id: string]: Motif }
  );

  createPage({
    path: "/accueil",
    component: path.resolve("./src/templates/_pages/accueil.template.tsx"),
  });

  motifs.forEach(({ related, ...motif }) => {
    createPage<MotifTemplateProps>({
      path: "/motifs/" + motif.name.toLowerCase().replaceAll(" ", "-"),
      component: path.resolve("./src/templates/motif.template.tsx"),
      context: {
        motif: {
          ...motif,
          related: related?.map((id) => _motifsByIds[id]),
        },
      },
    });
  });
};
