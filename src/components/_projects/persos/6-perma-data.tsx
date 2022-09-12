import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function PermaDataProject() {
  return (
    <Project
      title="PERMA-DATA"
      scope="full-stack"
      tags={["express", "react", "mongo", "heroku", "ludification"]}
      date="2017 - 2020"
    >
      <>
        <p>Base de données ludique sur les plantes.</p>
      </>
    </Project>
  );
}

export default PermaDataProject;
