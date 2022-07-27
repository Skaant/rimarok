import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function PokeTeamProject() {
  return (
    <Project
      title="POKÉ TEAM"
      scope="front-end"
      tags={["building game", "ressource management", "react", "svg", "redux"]}
      date="2020"
    >
      <>
        <p>
          Outil pour composer et identifier les points forts et points faibles
          (types et stats) de son équipe.
        </p>
      </>
    </Project>
  );
}

export default PokeTeamProject;
