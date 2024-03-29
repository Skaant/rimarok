import React from "react";
import { COLORS } from "../../../data/colors";
import LinksMenu from "../../LinksMenu";
import Project from "../../Project";

function MediartisProject() {
  return (
    <Project
      title="Mobilis Pro / Mediartis"
      scope="full-stack"
      tags={["nest", "typescript", "jest", "e2e", "vue", "bootstrap"]}
      date="Juin 2021 - Février 2023"
    >
      <>
        <p>
          <b>Plus d'un an cumulé</b> de missions sur le{" "}
          <b>projet novateur Mediartis</b>, un des deux produits phares de
          l'entreprise Mobilis Pro.
        </p>
        <p className="display-6">
          J'interviens pour <b>étendre les fonctionnalités</b> du produit, sous
          un angle <b>totalement full-stack</b> (Nest TS / Vue / Jest) :
        </p>
        <ul>
          <li>
            Stockage de <b>données RGPD</b>,
          </li>
          <li>Transition d'un système de rôles à un système de permissions,</li>
          <li>Ouverture du produit à un usage comme API externe,</li>
          <li>
            Tests <b>unitaires et e2e</b>,
          </li>
          <li>Mises à jour d'environnement et de sécurité.</li>
        </ul>
        <LinksMenu
          links={[
            {
              link: "https://mobilispro.com/fr/",
              label: "Le site de Mobilis Pro",
              color: COLORS.ABYSS,
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
