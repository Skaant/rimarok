export type Article = {
  id: string;
  date: string;
  title: string;
  tags: string[];
  description?: string;
  disabled?: true;
};
