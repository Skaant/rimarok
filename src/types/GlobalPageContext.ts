import { Motif } from "./Motif";

export type GlobalPageContext = {
  motifs: Motif[];
  footer: {
    motifs: Motif[];
  };
};
