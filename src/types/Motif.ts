import { MOTIFS } from "../data/motifs";

export type Motif = {
  id?: MOTIFS;
  name: string;
  summary?: string;
  closeTo?: MOTIFS[];
  /** Parents/context */
  parents?: MOTIFS[];
  children?: MOTIFS[];
  included?: MOTIFS[];
  includes?: MOTIFS[];
  implementations?: string[];
};
