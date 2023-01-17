export enum PAGES {
  ACCUEIL = "ACCUEIL",
  PRESTATION = "PRESTATION",
  PRESTATION_INGENIERIE_WEB = "PRESTATION_INGENIERIE_WEB",
  PRESTATION_ECO_CONCEPTION = "PRESTATION_ECO_CONCEPTION",
  MOTIFS = "MOTIFS",
  BLOG = "BLOG",
  STYLEGUIDE = "STYLEGUIDE",
  MENTIONS_LEGALES = "MENTIONS_LEGALES",
}

type PageData = {
  id: string;
  path: string;
  title: string;
  description?: string;
  tags?: string[];
};

export const PAGES_DATA: { [page in PAGES]: PageData } = {
  ACCUEIL: {
    id: "accueil",
    path: "/",
    title:
      "J'améliore vos sites et applicatifs web, dans une optique de sobriété numérique.",
  },
  PRESTATION: {
    id: "developpement-web-freelance",
    path: "/developpement-web-freelance",
    title: "Développement web freelance",
  },
  PRESTATION_INGENIERIE_WEB: {
    id: "ingenierie-logicielle",
    path: "/prestation/ingenierie-logicielle",
    title: "Ingénierie logicielle",
  },
  PRESTATION_ECO_CONCEPTION: {
    id: "eco-conception-logicielle",
    path: "/prestation/eco-conception-logicielle",
    title: "Éco-conception logicielle",
  },
  MOTIFS: {
    id: "motifs-de-conception",
    path: "/motifs-de-conception",
    title: "Motifs de conception",
  },
  BLOG: {
    id: "blog",
    path: "/blog",
    title: "Blog",
  },
  STYLEGUIDE: {
    id: "styleguide",
    path: "/styleguide",
    title: "Styleguide",
  },
  MENTIONS_LEGALES: {
    id: "mentions-legales",
    path: "/mentions-legales",
    title: "Mentions légales",
  },
};
