import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function HighbsBokProject() {
  return (
    <Project
      title="HIGHBS-BOK.art"
      scope="front-end"
      tags={[
        "gatsby",
        "typescript",
        "bootstrap",
        "scss",
        "github actions",
        "déploiement continu",
      ]}
      date="Avril 2021 - aujourd'hui"
    >
      <>
        <p>Le site commercial de mon livre : l'HIGHBS-BOK.</p>
        <p>
          Également une migration depuis mon framework (motifs-js) vers Gatsby.
        </p>
        <p>
          Grâce à la composabilité de React et les processus de déploiement
          continu de Github Actions, je peux adapter le contenu du site aux
          actualités et aux changements que j'effectue dans l'univers.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://highbs-bok.art",
              label: "Le site HIGHBS-BOK live",
            },
            {
              link: "https://github.com/Skaant/highbs-bok",
              label: "le repo HIGHBS-BOK sur Github",
              color: COLORS.MIST,
            },
          ]}
        />
      </>
    </Project>
  );
}

export default HighbsBokProject;
