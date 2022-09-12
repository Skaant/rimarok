import React from "react";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function CdietProject() {
  return (
    <Project
      title="Winnov / CDiet"
      date="Janvier - Avril 2017"
      scope="full-stack"
      tags={["react", "express", "mongo", "streaming", "bootstrap"]}
    >
      <>
        <p>
          Questionnaires en ligne et visio-conférence pour faciliter le suivi
          nutritionnel des patients d'EHPAD.
        </p>
        <LinksMenu
          links={[
            {
              link: "https://www.c-diet.com/",
              label: "Le site de CDiet",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default CdietProject;
