import { PageProps } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import { Motif } from "../types/Motif";

export type MotifTemplateProps = Pick<Motif, "name">;

function MotifTemplate({
  pageContext: { name },
}: PageProps<undefined, MotifTemplateProps>) {
  return (
    <Layout head={{ title: `Le motif ${name}` }}>
      <>
        <PageHeader title={name} subtitle={"Un motif en cours d'élaboration"} />
      </>
    </Layout>
  );
}

export default MotifTemplate;
