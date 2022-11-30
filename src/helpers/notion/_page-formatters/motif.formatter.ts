import {
  PageObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Motif } from "../../../types/Motif";
import richTextToString from "../richTextToString";

export function motifFormatter(page: PageObjectResponse): Motif {
  const {
    Index: index,
    Nom: name,
    Summary: summary,
    Tags: tags,
    ["Related motifs"]: related,
    Synonyms: synonyms,
  } = page.properties;
  return {
    id: page.id,
    index: (index && index.type === "number" && index.number) || -1,
    name:
      (name &&
        name.type === "title" &&
        richTextToString(name.title as TextRichTextItemResponse[])) ||
      "missing name ???",
    ...(summary && summary.type === "rich_text"
      ? {
          summary: richTextToString(
            summary.rich_text as TextRichTextItemResponse[]
          ),
        }
      : {}),
    ...(tags && tags.type === "multi_select"
      ? {
          tags: tags.multi_select.map(({ name }) => name),
        }
      : {}),
    ...(related && related.type === "relation"
      ? {
          related: related.relation.map(({ id }) => id),
        }
      : {}),
    ...(synonyms && synonyms.type === "rich_text"
      ? {
          synonyms: richTextToString(
            synonyms.rich_text as TextRichTextItemResponse[]
          ).split(", "),
        }
      : {}),
  };
}
