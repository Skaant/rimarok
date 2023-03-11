import * as React from "react";
import { COLORS } from "../data/colors";
import { Motif } from "../types/Motif";
import Row from "./Row";

export type MotifsListProps = { motifs: Motif[] };

function MotifsList({ motifs }: MotifsListProps) {
  return (
    <Row
      backgroundColor={COLORS.ABYSS}
      colClassName={`p-2 rounded-1 bg-${COLORS.LIGHT} table-responsive`}
    >
      <table className="table table-striped">
        <thead>
          <th scope="col">Nom du motif</th>
          <th scope="col">Description</th>
          <th scope="col">Synonymes</th>
        </thead>
        <tbody>
          {motifs
            .slice()
            .reverse()
            .sort(
              ({ index: a }, { index: b }) =>
                (typeof a === "number" && a > -1 ? a : 1000) -
                (typeof b === "number" && b > -1 ? b : 1000)
            )
            .map(({ name, slug, summary, synonyms }) => {
              return (
                <tr>
                  <th scope="row" className="my-3">
                    <a href={`/motifs/${slug}`}>{name}</a>
                  </th>
                  <td>{summary || ""}</td>
                  <td>{(synonyms || []).join(", ")}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Row>
  );
}

export default MotifsList;
