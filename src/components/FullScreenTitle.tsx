import * as React from "react";
import Row from "./Row";
import { COLORS } from "../data/colors";

type FullScreenTitleProps = {};

function FullScreenTitle({}: FullScreenTitleProps) {
  return (
    <Row backgroundColor={COLORS.FLOWER}>
      <div className="container-fluid vh-100">
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="font-slab">RIMAROK</h1>
          <p>Ingénierie web et éco-conception</p>
        </div>
      </div>
    </Row>
  );
}

export default FullScreenTitle;
