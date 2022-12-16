import React from "react";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function DcbrainProject() {
  return (
    <Project
      title="DCbrain"
      date="Octobre 2016 - Août 2018"
      scope="full-stack"
      tags={[
        "data visualization",
        "d3",
        "cartographie",
        "angular",
        "express",
        "migration",
        "react",
        "scss",
        "material design",
      ]}
    >
      <>
        <p>
          Je suis embauché par{" "}
          <a href="https://fr.linkedin.com/in/alexandre-damiron-3359452a">
            Alexandre Damiron
          </a>
          , lead tech et spécialiste data visualization, pour le suppléer
          ponctuellement dans sa prestation sur les produits DCbrain.
        </p>
        <p>
          Nous travaillons sur plusieurs déclinaisons d'une application D3 à
          destination de clients aux besoins spécifiques, sur des algorithmes de
          base-de-données orientée graphe.
        </p>
        <p>
          Je développe des fonctionnalités et participe à la migration de
          l'application Angular vers React.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://dcbrain.com",
              label: "Le site de DCbrain",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default DcbrainProject;
