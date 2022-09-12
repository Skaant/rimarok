import * as React from "react";
import { MOTIFS } from "../data/motifs";
import { Link } from "gatsby";

type MotifsListProps = {};

function MotifsList({}: MotifsListProps) {
  return (
    <div className="row">
      {Object.entries(MOTIFS).map((motif) => {
        return (
          <div className="my-5 px-2 col-xl-4 col-md-6 col-sm-12 text-center">
            <div className="py-4 bg-sun rounded">
              <h3 className="mt-3 mb-5 text-light">
                {motif[0].replaceAll("_", " ")}
              </h3>
              {/* {summary ? <p>Summary</p> : ""} */}
              <div>
                <Link to={motif[0].toLowerCase()}>Vers la page {motif[0]}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MotifsList;
