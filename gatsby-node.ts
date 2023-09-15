import type { GatsbyNode } from "gatsby";
import path from "path";
import { PAGES, PAGES_DATA } from "./src/data/pages";
import { motifFormatter } from "./src/helpers/motifFormatter";
import { MotifTemplateProps } from "./src/templates/motif.template";
import { GlobalPageContext } from "./src/types/GlobalPageContext";
import { Motif } from "./src/types/Motif";
import { readFile } from "fs/promises";
import {
  BlockObjectResponse,
  PageObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MotifPageAndBlocks } from "./src/types/MotifPageAndBlocks";
import { Link, PageAndBlocks } from "nebula-atoms";
import richTextToString from "./src/helpers/richTextToString";
import { ContentTemplateContext } from "./src/templates/content.template";
import { COLORS } from "./src/data/colors";
import { BlogTemplateContext } from "./src/templates/_pages/blog.template";
import { articleFormatter } from "./src/helpers/articleFormatter";
import { MotifsTemplateContext } from "./src/templates/_pages/motifs.template";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  const TITLE = "RIMAROK.com, freelance 🤖 dev web 🌻 éco-conception";

  /*
   * 1. PAGE [& CONTENTS] RETRIEVING
   */

  const articlesCache = ([] ||
    JSON.parse(
      await readFile("./cache/articles/pages.json", "utf-8")
    )) as PageObjectResponse[];

  const articlesPageAndBlocks = await Promise.all(
    articlesCache.map(
      async (page) =>
        ({
          page,
          blocks: JSON.parse(
            await readFile(
              `./cache/articles/pages/${page.id}/page.json`,
              "utf-8"
            )
          ) as BlockObjectResponse[],
        } as PageAndBlocks)
    )
  );

  const articles = articlesCache.map(articleFormatter);

  const articlesLink = articles.map(
    ({ index, title, slug }) =>
      ({
        index,
        label: title,
        url: `/blog/${slug}`,
      } as { index: number } & Link)
  );

  const motifsCache = ([] ||
    JSON.parse(
      await readFile("./cache/motifs/pages.json", "utf-8")
    )) as PageObjectResponse[];

  const motifs = await Promise.all(
    motifsCache.map(
      async (page) =>
        ({
          page,
          blocks: JSON.parse(
            await readFile(`./cache/motifs/pages/${page.id}/page.json`, "utf-8")
          ) as BlockObjectResponse[],
        } as PageAndBlocks)
    )
  );

  const {
    motifs: _motifs,
    motifsPageAndBlocks,
    motifsIndexById,
  } = motifs.reduce(
    (acc, pageAndBlocks, index) => {
      const motif = motifFormatter(pageAndBlocks);
      acc.motifs.push(motif);
      acc.motifsPageAndBlocks.push({
        motif,
        ...pageAndBlocks,
      });
      acc.motifsIndexById[motif.id] = index;
      return acc;
    },
    {
      motifs: [] as Motif[],
      motifsPageAndBlocks: [] as MotifPageAndBlocks[],
      motifsIndexById: {} as Record<string, number>,
    }
  );

  /* 2. GLOBAL */

  const globalPageContext: GlobalPageContext = {
    firstMotifsLink: _motifs
      .sort((a, b) => (a.index || 1000) - (b.index || 1000))
      .slice(0, 5)
      .map(
        ({ name, slug }) => ({ label: name, url: `/motifs/${slug}` } as Link)
      ),
    motifsLength: _motifs.length,
    lastArticlesLink: articlesLink
      .sort((a, b) => (b.index || 0) - (a.index || 0))
      .slice(-5),
  };

  /* 3. PAGES CREATION */

  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.ACCUEIL].path,
    component: path.resolve("./src/templates/_pages/accueil.template.tsx"),
    context: globalPageContext,
  });
  /* createPage<GlobalPageContext>({
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
  createPage<MotifsTemplateContext>({
    path: PAGES_DATA[PAGES.MOTIFS].path,
    component: path.resolve("./src/templates/_pages/motifs.template.tsx"),
    context: {
      motifs: _motifs,
      ...globalPageContext,
    },
  });
  createPage<BlogTemplateContext>({
    path: PAGES_DATA[PAGES.BLOG].path,
    component: path.resolve("./src/templates/_pages/blog.template.tsx"),
    context: {
      links: articlesLink,
      ...globalPageContext,
    },
  });
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.STYLEGUIDE].path,
    component: path.resolve("./src/templates/_pages/styleguide.template.tsx"),
    context: globalPageContext,
  }); */
  createPage<GlobalPageContext>({
    path: PAGES_DATA[PAGES.MENTIONS_LEGALES].path,
    component: path.resolve(
      "./src/templates/_pages/mentions-legales.template.tsx"
    ),
    context: globalPageContext,
  });

  /* motifsPageAndBlocks
    .filter(({ motif: { name } }) => name)
    .forEach(({ motif }) => {
      const related = motif.related
        ?.map((id) => _motifs[motifsIndexById[id]])
        .filter((motif) => motif);
      createPage<MotifTemplateProps>({
        path: "/motifs/" + motif.slug,
        component: path.resolve("./src/templates/motif.template.tsx"),
        context: {
          ...globalPageContext,
          motif: {
            ...motif,
            related,
          },
          blocks: motifsPageAndBlocks[motifsIndexById[motif.id]].blocks,
        },
      });
    });

  articlesPageAndBlocks.forEach(
    ({
      page: {
        properties: {
          Name: name,
          Slug: slug,
          ["Créé le"]: createdAt,
          ["Publié le"]: publishedAt,
        },
      },
      blocks,
    }) => {
      const _slug =
        slug.type === "rich_text" &&
        richTextToString(slug.rich_text as TextRichTextItemResponse[]);
      const title =
        name.type === "title" &&
        richTextToString(name.title as TextRichTextItemResponse[]);
      createPage({
        path: `/blog/${_slug}`,
        component: path.resolve("./src/templates/content.template.tsx"),
        context: {
          title,
          header: {
            color: COLORS.ABYSS,
            backSectionLabel: "Retour à la liste des articles",
            backSectionLink: "/blog",
          },
          blocks,
          ...globalPageContext,
        } as ContentTemplateContext,
      });
    }
  ); */
};
