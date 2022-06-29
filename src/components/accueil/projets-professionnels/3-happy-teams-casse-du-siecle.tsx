import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function CasseDuSiecleProject() {
  return (
    <Project
      title="Happy Teams / Le Casse du Siècle"
      scope="front-end"
      date="Mars - Avril 2022"
      tags={["react", "real time", "xstate", "online game", "team building"]}
    >
      <>
        <p>Projet futuriste d'escape game en ligne pour les entreprises.</p>
        <p>
          Interventions sur l'application client, React / Xstate : développement
          de composants d'UI du jeu.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://www.happyteams.events/",
              label: "Le site Happy Teams",
              color: COLORS.MIST,
            },
            {
              link: "https://www.happyteams.events/le-casse-du-siecle",
              label: "La page du Casse du Siècle",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default CasseDuSiecleProject;
