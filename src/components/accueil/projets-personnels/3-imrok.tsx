import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function ImrokProject() {
  return (
    <Project
      title="IMROK.fr"
      scope="front-end"
      tags={[
        "gatsby",
        "typescript",
        "mdx",
        "bootstrap",
        "scss",
        "github actions",
        "déploiement continu",
      ]}
      date="En cours"
    >
      <>
        <p>Dernier de mes sites à devoir être migré vers Gatsby.</p>
        <p>
          Gros challenge car le contenu à accueillir est de plusieurs centaines
          de documents, répartis en 6 catégories.
        </p>
        <p>
          Usage de MDX pour les objets éditoriaux, et stockage des images à
          l'exterieur du projet (sous-domaine).
        </p>
        <LinksMenu
          links={[
            {
              link: "https://github.com/Skaant/imrok-next",
              label: "le repo IMROK sur Github",
              color: COLORS.MIST,
            },
          ]}
        />
      </>
    </Project>
  );
}

export default ImrokProject;
