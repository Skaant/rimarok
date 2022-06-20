import React from "react";
import FullScreenTitle from "../components/FullScreenTitle";
import Layout from "../components/Layout";
import { Motif } from "../types/Motif";

export type MotifTemplateProps = Pick<Motif, "name">;

function MotifTemplate({ name }: MotifTemplateProps) {
  return (
    <Layout head={{ title: name }}>
      <>
        <FullScreenTitle title={name} subtitle={"Un motif"} />
      </>
    </Layout>
  );
}

export default MotifTemplate;
