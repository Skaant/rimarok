import * as React from "react";
import { MOTIFS } from "../data/motifs";
import { Link } from "gatsby";

type MotifsListProps = {};

function MotifsList({}: MotifsListProps) {
  return (
    <div className="row">
      {Object.entries(MOTIFS).map((motif) => {
        return (
          <div className="my-5 col-xl-3 col-md-6 col-sm-12 text-center">
            <h3>{motif[0]}</h3>
            {/* {summary ? <p>Summary</p> : ""} */}
            <div>
              <Link to={motif[0]}>Page {motif[0]}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MotifsList;
