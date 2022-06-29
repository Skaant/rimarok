import React from "react";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function OmerProject() {
  return (
    <Project
      title="URCA / OMER"
      date="Juin 2019 - Août 2020"
      scope="full-stack"
      tags={[
        "php",
        "slim",
        "composer",
        "react",
        "migration",
        "déploiement continu",
        "gitlab",
      ]}
    >
      <>
        <p>
          <i>Ordres de Mission et REmboursements.</i>
        </p>
        <p>
          En CDD au Pole Applicatif de l'Université de Reims, je mène deux
          projets de dématérialisation.
        </p>
        <p>
          OMER, le plus conséquent, est une (Frankenstein) migration d'une
          application monolithique PHP à un client (React) / serveur (Slim)
          modulaire.
        </p>
        <p>
          J'intègre un GitLab sur l'infrastructure de l'Université et mets en
          place un workflow de déploiement continu pour mes applications : FTP,
          Composer, NPM, build des applications pour les différentes étapes des
          formulaires dématérialisés.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://www.univ-reims.fr/",
              label: "Le site de l'Université Reims Champagne-Ardenne",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default OmerProject;
