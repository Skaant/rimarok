import type { GatsbyNode } from "gatsby";
import path from "path";
import { MOTIFS } from "./src/data/motifs";
import { MotifTemplateProps } from "./src/templates/motif.template";

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createPage } = actions;
  Object.keys(MOTIFS).forEach((key) => {
    createPage<MotifTemplateProps>({
      path: "/motifs/" + key.toLowerCase(),
      component: path.resolve("./src/templates/motif.template.tsx"),
      context: {
        name: key,
      },
    });
  });
};
