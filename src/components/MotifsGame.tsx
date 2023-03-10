import React, { useEffect, useMemo } from "react";
import { COLORS } from "../data/colors";
import { Location } from "../types/Location";
import { Motif } from "../types/Motif";

export default function MotifsGame({ motifs }: { motifs: Motif[] }) {
  window &&
    useEffect(() => {
      if (!window.localStorage.getItem(`motifs-entité-discovered`))
        window.localStorage.setItem(`motifs-entité-discovered`, "true");
    });
  const motifsWithDiscovered = useMemo(
    () =>
      window
        ? motifs
            .map((motif) => ({
              ...motif,
              discovered:
                window.localStorage.getItem(
                  `motifs-${motif.slug}-discovered`
                ) !== null,
            }))
            .sort(
              (a, b) =>
                ((a.index || -1) === -1 ? 8888 : a.index || -1) -
                ((b.index || -1) === -1 ? 8888 : b.index || -1)
            )
        : motifs,
    [motifs]
  );
  const locations = useMemo(
    () =>
      Object.values(
        motifsWithDiscovered
          .filter(({ locations }) => locations)
          .reduce((acc, { index, locations, discovered }) => {
            (locations as string[]).forEach((item) => {
              if (!acc[item]) {
                acc[item] = {
                  firstIndex: index || -1,
                  name: item,
                  discovered: 0,
                  total: 0,
                };
              }
              if (discovered) acc[item].discovered++;
              acc[item].total++;
            });
            return acc;
          }, {} as { [key: string]: Location })
      ).sort(
        (a, b) =>
          (a.firstIndex === -1 ? 8888 : a.firstIndex) -
          (b.firstIndex === -1 ? 8888 : b.firstIndex)
      ),
    [motifsWithDiscovered]
  );
  return (
    <div className="row bg-abyss">
      <>
        <div className="col-12 col-md-4 p-4">
          <h3>Lieux</h3>
          <div
            className="d-flex align-items-start mt-4"
            style={{ flexWrap: "wrap" }}
          >
            {locations.map(({ name, discovered, total }) => (
              <a
                className={`bg-${COLORS.LAGOON} rounded-pill m-2 text-${
                  COLORS.LIGHT
                } px-3 py-1${!discovered ? " opacity-50" : ""}`}
                href={
                  discovered
                    ? `/motifs/lieux/${name
                        .replace(/[\s']/g, "-")
                        .toLowerCase()}`
                    : undefined
                }
              >
                {discovered ? name : "???"} {discovered} /{" "}
                {discovered ? total : "???"}
              </a>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-8 p-4">
          <h3 className="m-4">Motifs</h3>
          <div
            className="d-flex align-items-start mt-4"
            style={{ flexWrap: "wrap" }}
          >
            {motifsWithDiscovered.map(({ index, name, discovered }) => (
              <a
                className={`bg-${COLORS.LIGHT}${
                  !discovered ? " opacity-50" : ""
                } rounded-pill m-2 px-3 py-1`}
                href={
                  discovered
                    ? `/motifs/${name.replace(/[\s']/g, "-").toLowerCase()}`
                    : undefined
                }
              >
                {(index === undefined ? -1 : index) > -1
                  ? `${index === 0 ? "0" : index} `
                  : ""}
                {discovered ? name : "???"}
              </a>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
