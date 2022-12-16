import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function CrestJazzProject() {
  return (
    <Project
      title="AGENCE NOUNOURS / CREST JAZZ"
      date="Septembre 2021 - Février 2022"
      scope="full-stack"
      tags={["wordpress", "acf", "php", "bootstrap", "sass"]}
    >
      <>
        <p>
          Intégration d'un WordPress et développement du thème du nouveau site
          de l'association et festival Crest Jazz.
        </p>
        <p>Détails de la stack :</p>
        <ul>
          <li>GitHub Actions (CD),</li>
          <li>Webpack front : SCSS / JS,</li>
          <li>Racine Bootstrap, généreusement customisé,</li>
          <li>PHP + ACF.</li>
        </ul>
        <LinksMenu
          links={[
            {
              link: "https://www.agencenounours.com/",
              label: "Le site Agence Nounours",
              color: COLORS.MIST,
            },
            {
              link: "https://crestjazz.com/",
              label: "Le site du Crest Jazz Festival",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default CrestJazzProject;
