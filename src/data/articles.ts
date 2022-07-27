import { Article } from "../types/Article";

export const ARTICLES_DATA: Article[] = [
  {
    id: "1",
    title: "motifs-js : Publier un module npm",
    date: "05/01/2021",
    tags: ["dev", "npm", "motifs-js"],
    description:
      "Malgré un investissement initial de temps plus important, " +
      "créer son propre module npm et le publier est la meilleure façon de " +
      "partager son code entre plusieurs projets. " +
      "Voyons ensemble la marche à suivre pour publier notre premier module npm !",
  },
  {
    id: "2",
    title: "Roadmap open-source #1",
    date: "08/01/2021",
    tags: [
      "roadmap",
      "open-source",
      "rimarok.com",
      "motifs-js",
      "imrok.fr",
      "bazar.imrok.fr",
    ],
    description: "",
    disabled: true,
  },
  {
    id: "3",
    title: "motifs-js : 0.4 et nouveau WEBSITE build (sitemap included)",
    date: "27/01/2021",
    tags: ["motifs-js", "release notes", "en"],
    description: "",
    disabled: true,
  },
  {
    id: "4",
    title: "Visualisation d'une codebase complexe",
    date: "04/02/2021",
    tags: ["developer experience", "réflexions", "futur"],
    description: "",
    disabled: true,
  },
  {
    id: "5",
    title: "dev.rimarok.com en déploiement continu",
    date: "11/02/2021",
    tags: ["rimarok.com", "devops", "CI/CD", "ftp"],
    description: "",
    disabled: true,
  },
  {
    id: "6",
    title: "Dans le code, rien est éternel",
    date: "19/02/2021",
    tags: [
      "philosophie du code",
      "code joyau",
      "refactoring",
      "impermanence des choses",
    ],
    description:
      "Parlons rapidement du code joyau avant " +
      "d'aborder l'impermanence des choses que l'on crée, " +
      "code inclus :P",
    disabled: true,
  },
  {
    id: "7",
    title: "Le langage des spécifications",
    date: "05/04/2021",
    tags: ["court", "philosophie du code", "langage", "communication", "tests"],
    description: "",
    disabled: true,
  },
  {
    id: "8-refonte-site-contenu-gatsby",
    title: "Refonte du site : nouveaux contenus et passage sur GatsbyJS",
    date: "04/07/2022",
    tags: ["devblog site", "motifs", "gastby js"],
    description:
      "Accompagné de Tim Jeanmart, développeur web junior, je " +
      "migre mon site internet professionnel vers Gatsby et mets à jour " +
      "son contenu.",
    disabled: true,
  },
];
