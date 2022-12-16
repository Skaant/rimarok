import React from "react";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function EljieProject() {
  return (
    <Project
      title="Eljie / Champagne J&A Deprez"
      scope="full-stack"
      tags={["wordpress", "php", "css", "hebergement"]}
      date="Juillet - Octobre 2022"
    >
      <>
        <p>
          J'assiste ma compagne (<a href="https://eljie.fr">eljie.fr</a>) dans
          son activité d'intégration de sites WordPress,{" "}
          <b>en réalisant des developpements personnalisés en PHP et en CSS</b>.
        </p>
        <p>
          Différents sites où je suis intervenu comme consultant technique :
        </p>
        <LinksMenu
          links={[
            {
              link: "https://champagnejadeprez.fr/",
              label: "Champagne J&A Deprez",
            },
            {
              link: "https://mariette-et-julion.fr/",
              label: "Mariette et Julion (créatrice)",
            },
            {
              link: "https://elementerres.fr/",
              label: "Elementerres (poteries et atelies)",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default EljieProject;
