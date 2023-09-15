import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Article } from "../types/Article";
import richTextToString from "./richTextToString";

export function articleFormatter({ properties }: PageObjectResponse): Article {
  const {
    Index: index,
    Name: name,
    Slug: slug,
    Summary: summary,
    Tags: tags,
    ["Créé le"]: createdAt,
    ["Publié le"]: publishedAt,
  } = properties;
  const _index = index && index.type === "number" && index.number;
  const _name =
    name &&
    name.type === "title" &&
    richTextToString(name.title as TextRichTextItemResponse[]);
  if (!_name) throw new Error(`Missing name on article ${_index}`);
  const _slug =
    slug &&
    slug.type === "rich_text" &&
    richTextToString(slug.rich_text as TextRichTextItemResponse[]);
  if (!_slug) throw new Error(`Missing slug on article ${_index}`);
  const _summary =
    summary &&
    summary.type === "rich_text" &&
    richTextToString(summary.rich_text as TextRichTextItemResponse[]);
  const _tags =
    tags &&
    tags.type === "multi_select" &&
    tags.multi_select.map(({ name }) => name);
  const _createdAt =
    createdAt && createdAt.type === "date" && createdAt.date?.start;
  const _publishedAt =
    publishedAt && publishedAt.type === "date" && publishedAt.date?.start;
  return {
    index: _index || 0,
    title: _name,
    slug: _slug,
    description: _summary || undefined,
    tags: _tags || undefined,
    createdAt: _createdAt || undefined,
    publishedAt: _publishedAt || undefined,
  };
}
