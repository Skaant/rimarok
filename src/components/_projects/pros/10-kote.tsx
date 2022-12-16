import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function KoteProject() {
  return (
    <Project
      title="Kote"
      scope="full-stack"
      tags={["php", "wordpress", "css"]}
      date="Juin 2022 - Aujourd'hui"
    >
      <>
        <p>
          Je travaille directement en lien avec mon voisin Quentin, fondateur de{" "}
          <a href="https://kote.fr/">Koté communication</a> sur des
          développements personnalisés PHP, WordPress, JavaScript et CSS.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://kote.fr/",
              label: "Le site pro de Quentin",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default KoteProject;
