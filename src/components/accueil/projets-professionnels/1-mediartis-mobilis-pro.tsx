import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function MediartisProject() {
  return (
    <Project
      title="Mobilis Pro/ Mediartis"
      scope="full-stack"
      tags={["nest", "typescript", "jest", "e2e", "vue", "bootstrap"]}
      date="Juin 2021 - aujourd'hui"
    >
      <>
        <p>
          Bientôt un an de missions cumulées sur le projet novateur Mediartis,
          un des deux produits phares de l'entreprise Mobilis Pro.
        </p>
        <p>
          J'interviens pour étendre les fonctionnalités du produit, sous un
          angle totalement full-stack (Nest TS / Vue) :
        </p>
        <ul>
          <li>Stockage de données RGPD,</li>
          <li>Transition d'un système de rôles à un système de permissions,</li>
          <li>Ouverture du produit à un usage comme API externe,</li>
          <li>Tests unitaires et e2e,</li>
          <li>Mises à jour d'environnement et de sécurité ...</li>
        </ul>
        <LinksMenu
          links={[
            {
              link: "https://mobilispro.com/fr/",
              label: "Le site de Mobilis Pro",
              color: COLORS.MIST,
            },
            {
              link: "https://mediartis.com/fr/",
              label: "Le site de Mediartis",
            },
          ]}
        />
      </>
    </Project>
  );
}

export default MediartisProject;
