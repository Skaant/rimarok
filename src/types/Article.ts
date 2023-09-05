export type Article = {
  index: number;
  title: string;
  slug: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
  publishedAt?: string;
};
