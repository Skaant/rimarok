import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function RimarokProject() {
  return (
    <Project
      title="RIMAROK.com"
      scope="full-stack"
      tags={[
        "nest",
        "gatsby",
        "typescript",
        "bootstrap",
        "scss",
        "github actions",
        "déploiement continu",
      ]}
      date="Octobre 2020 - aujourd'hui"
    >
      <>
        <p>Mon site professionnel de développement web.</p>
        <p>
          J'ai migré le site depuis mon framework (motifs-js) vers Gatsby en
          Juin 2022.
        </p>
        <p>
          Pour m'aider à traiter rapidement ces points, j'ai fait appel à Tim
          Jeanmart, développeur web junior.
        </p>
        <p>
          Challengeant conceptuellement, le projet est assez simple
          techniquement : c'est le deuxième site et demi que je passe sur
          Gatsby, et au moins le dixième que je branche en déploiement continu.
        </p>
        <p>
          Cette migration me permet d'insister sur mon attachement à la sobriété
          et à la réflexion.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://rimarok.com",
              label: "Le site RIMAROK live",
            },
            {
              link: "https://github.com/Skaant/rimarok-2",
              label: "le repo RIMAROK sur Github",
              color: COLORS.MIST,
            },
            {
              link: "https://timjeanmart.be/",
              label: "Le site de Tim Jeanmart",
              color: COLORS.MIST,
            },
          ]}
        />
      </>
    </Project>
  );
}

export default RimarokProject;
