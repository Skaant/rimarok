import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function TheExpansProject() {
  return (
    <Project
      title="The EXPANS"
      scope="front-end"
      tags={["building game", "ressource management", "react", "svg", "redux"]}
      date="Juillet - Août 2021"
    >
      <>
        <p>
          Expérience sur un mini-moteur graphique SVG pour un jeu de
          construction et de gestion de ressource.
        </p>
        <p>
          Les ressources sont mises à jour par Redux à chaque changement dans
          les points et chemins.
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

export default TheExpansProject;
