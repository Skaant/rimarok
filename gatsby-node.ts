import { Client } from "@notionhq/client";
import type { GatsbyNode } from "gatsby";
import path from "path";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  if (!process.env.MOTIFS_DATABASE_ID)
    throw new Error("Missing process.env.MOTIFS_DATABASE_ID");
  // const motifs = await getDatabase(notion, process.env.MOTIFS_DATABASE_ID);

  createPage({
    path: "/accueil",
    component: path.resolve("./src/templates/_pages/accueil.template.tsx"),
  });

  /* Object.keys(MOTIFS).forEach((key) => {
    createPage<MotifTemplateProps>({
      path: "/motifs/" + key.toLowerCase(),
      component: path.resolve("./src/templates/motif.template.tsx"),
      context: {
        name: key,
      },
    });
  }); */
};
