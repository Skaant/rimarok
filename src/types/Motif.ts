export type Motif = {
  id: string;
  index?: number;
  name: string;
  slug: string;
  summary?: string;
  locations?: string[];
  related?: string[];
  synonyms?: string[];
  discovered?: boolean;
};
