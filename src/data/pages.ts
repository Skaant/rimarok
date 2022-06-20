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
    title: "Construire un internet durable",
  },
  PRESTATION: {
    id: "prestation",
    path: "/prestation",
    title: "Prestation",
  },
  PRESTATION_INGENIERIE_WEB: {
    id: "ingenierie-web",
    path: "/prestation/ingenierie-web",
    title: "Ingénierie web",
  },
  PRESTATION_ECO_CONCEPTION: {
    id: "eco-conception",
    path: "/prestation/eco-conception",
    title: "Éco-conception",
  },
  MOTIFS: {
    id: "motifs",
    path: "/motifs",
    title: "Motifs",
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
