import * as React from "react";
import { MOTIFS, MOTIFS_DATA } from "../data/motifs";
import { Link } from "gatsby";

type MotifsListProps = {};

function MotifsList({}: MotifsListProps) {
  return (
    <div className="row">
      <div className="m-5 col-xl-3 col-md-6 col-sm-12 text-center">
        <h3>Title</h3>
        <p>Summary</p>
        <div>
          <Link to="">Page </Link>
        </div>
      </div>
    </div>
  );
}

export default MotifsList;
