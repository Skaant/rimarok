import * as React from "react";
import { MOTIFS } from "../data/motifs";
import { Link } from "gatsby";

type MotifsListProps = {};

function MotifsList({}: MotifsListProps) {
  return (
    <div className="row">
      {Object.entries(MOTIFS).map((motif) => {
        return (
          <div className="m-5 col-xl-3 col-md-6 col-sm-12 text-center">
            <h3>{motif[0]}</h3>
            <p>Summary</p>
            <div>
              <Link to="">Page </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MotifsList;
