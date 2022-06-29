import React from "react";
import Project from "../../Project";

function HygieProject() {
  return (
    <Project
      title="Hygie"
      date="Octobre 2020 - Mars 2021"
      scope="full-stack"
      tags={[
        "ludification",
        "programmation fonctionnelle",
        "typescript",
        "nx",
        "nest",
        "angular",
        "mongodb",
        "jest",
      ]}
    >
      <>
        <p>
          Application pédagogique ludifiée à l'attention des étudiants médecins.
        </p>
        <p>
          Je corrige des bugs, j'étends les spécifications et j'ajoute des
          fonctionnalités sur la stack TS Nest / Angular.
        </p>
      </>
    </Project>
  );
}

export default HygieProject;
