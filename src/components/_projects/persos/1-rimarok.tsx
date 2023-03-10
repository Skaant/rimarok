import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function RimarokProject() {
  return (
    <Project
      title="RIMAROK.com"
      scope="front-end"
      tags={[
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
        <p>
          Mon <b>site professionnel</b> de développement web.
        </p>
        <p>
          J'ai migré le site depuis{" "}
          <a href="https://github.com/Skaant/motifs-js">
            mon framework (motifs-js)
          </a>{" "}
          vers Gatsby en Juin 2022.
        </p>
        <p>
          Pour m'aider à <b>mener ce projet plus rapidement</b> et pour{" "}
          <b>expérimenter mes compétences de management</b>, j'ai fait appel à
          Tim Jeanmart, développeur web junior.
        </p>
        <p>
          Challengeant conceptuellement, le projet est assez simple
          techniquement : c'est <b>le deuxième site que je passe sur Gatsby</b>,
          et au moins{" "}
          <b>la dixième application que je branche en déploiement continu</b>.
        </p>
        <p className="display-6">
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
