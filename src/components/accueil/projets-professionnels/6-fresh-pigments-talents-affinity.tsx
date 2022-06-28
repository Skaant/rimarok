import React from "react";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function TalentsAffinityProject() {
  return (
    <Project
      title="Fresh Pigment / Talents Affinity"
      date="Janvier - Février 2017"
      scope="front-end"
      tags={["ludification", "angular", "scss"]}
    >
      <>
        <p>
          Je participe au développement d'une application ludifiée pour les
          ressources humaines.
        </p>
        <p>Le framework sur lequel j'interviens est Angular.</p>
        <LinksMenu
          links={[
            {
              link: "http://freshpigment.com/",
              label: "Le site de Fresh Pigment",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default TalentsAffinityProject;
