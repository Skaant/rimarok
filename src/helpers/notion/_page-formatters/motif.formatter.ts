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
  const _name =
    name &&
    name.type === "title" &&
    richTextToString(name.title as TextRichTextItemResponse[]);
  if (!_name) throw new Error(`Missing name on page ${page.id}`);
  const _synonyms =
    synonyms &&
    synonyms.type === "rich_text" &&
    richTextToString(synonyms.rich_text as TextRichTextItemResponse[])
      .split(",")
      .filter((val) => val)
      .map((val) => val.trim());
  return {
    id: page.id,
    index: (index && index.type === "number" && index.number) || -1,
    name: _name,
    slug: _name.toLowerCase().replaceAll(" ", "-"),
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
    ...(_synonyms && _synonyms[0] !== ""
      ? {
          synonyms: _synonyms,
        }
      : {}),
  };
}
