"use client";

import React, { useState } from "react";
import { COLORS } from "../data/colors";
import MotifsGame from "./MotifsGame";
import MotifsList, { MotifsListProps } from "./MotifsList";
import Row from "./Row";

const MOTIFS_APP_MODE = "motifs-app-mode";
const MOTIFS_APP_MODE_LUDIQUE = "motifs-app-ludique";
const MOTIFS_APP_MODE_NORMAL = "motifs-app-normal";

type MotifsAppProps = MotifsListProps;

export default function MotifsApp(props: MotifsAppProps) {
  const [mode, setMode] = useState(
    window
      ? window.localStorage.getItem(MOTIFS_APP_MODE)
      : MOTIFS_APP_MODE_NORMAL
  );
  function toggleMode() {
    const newMode =
      mode === MOTIFS_APP_MODE_LUDIQUE
        ? MOTIFS_APP_MODE_NORMAL
        : MOTIFS_APP_MODE_LUDIQUE;
    window.localStorage.setItem(MOTIFS_APP_MODE, newMode);
    setMode(newMode);
  }
  function ToggleModeButton() {
    return (
      <Row paddingY={3}>
        <div className="d-flex align-items-center">
          Motifs mode :{" "}
          {mode === MOTIFS_APP_MODE_LUDIQUE ? "ludique" : "normal"}
          <button
            className={`btn btn-${COLORS.FLOWER} rounded-pill ms-3`}
            onClick={toggleMode}
          >
            Changer de mode
          </button>
        </div>
      </Row>
    );
  }
  return (
    <div>
      {mode ? (
        <>
          <ToggleModeButton />
          {mode === MOTIFS_APP_MODE_LUDIQUE ? (
            <MotifsGame {...props} />
          ) : (
            <MotifsList {...props} />
          )}
          <ToggleModeButton />
        </>
      ) : (
        <div>
          De quelle façon souhaitez-vous explorer la liste des motifs ?
          <button
            onClick={() => {
              window.localStorage.setItem(
                MOTIFS_APP_MODE,
                MOTIFS_APP_MODE_LUDIQUE
              );
              setMode(MOTIFS_APP_MODE_LUDIQUE);
            }}
          >
            Mode ludifié
          </button>
          <button
            onClick={() => {
              window.localStorage.setItem(
                MOTIFS_APP_MODE,
                MOTIFS_APP_MODE_NORMAL
              );
              setMode(MOTIFS_APP_MODE_NORMAL);
            }}
          >
            Mode normal
          </button>
        </div>
      )}
    </div>
  );
}
