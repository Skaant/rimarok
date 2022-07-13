import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function MotifsJsProject() {
  return (
    <Project
      title="motifs-js"
      scope="full-stack"
      tags={[
        "framework",
        "design patterns",
        "static site rendering",
        "specifications",
      ]}
      date="2019 - 2020"
    >
      <>
        <p>Ce projet est né d'une double volonté :</p>
        <p>
          Premièrement, en développant PERMA-DATA et des projets professionnels,
          la récurrence de certains motifs me saute aux yeux et je souhaite
          créer une base-de-données personnelle pour les agréger.
        </p>
        <p>
          Deuxièmement, avant de découvrir{" "}
          <a href="https://gatsbyjs.com/" target="_blank">
            Gatsby
          </a>
          , j'aspirais à avoir un système de génération de site statique.
        </p>
        <p>
          Je créer alors un framework JS autour de ces enjeux, et j'y adjoint
          même quelques fonctionnalités de tests inspirées de Jest.
        </p>
        <p>
          Résolument orienté motif, ce projet m'a poussé à investiguer le
          concept de{" "}
          <i>
            <a
              href="https://www.researchgate.net/publication/3981737_Generative_design_patterns"
              target="_blank"
            >
              generative design pattenrs
            </a>
          </i>
          .
        </p>
        <p>
          Il m'a également montré les limites de JS vanilla et de maintenir un
          outile seul, ce qui m'a mené à Gatsby.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://motifs-js-website-imrok.vercel.app/",
              label: "le site de documentation motifs-js",
            },
            {
              link: "https://github.com/Skaant/motifs-js",
              label: "le repo motifs-js sur Github",
              color: COLORS.MIST,
            },
          ]}
        />
      </>
    </Project>
  );
}

export default MotifsJsProject;
