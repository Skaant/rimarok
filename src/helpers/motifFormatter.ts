import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { PageAndBlocks } from "nebula-atoms";
import { Motif } from "../types/Motif";
import richTextToString from "./richTextToString";

export function motifFormatter({ page }: PageAndBlocks): Motif {
  const {
    Index: index,
    Nom: name,
    Summary: summary,
    ["Lieux"]: locations,
    ["Related motifs"]: related,
    Synonyms: synonyms,
  } = page.properties;
  const _index = index && index.type === "number" && index.number;
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
    index: _index === null || _index === false ? -1 : _index,
    name: _name,
    slug: _name.toLowerCase().replace(/\s/g, "-"),
    ...(summary && summary.type === "rich_text"
      ? {
          summary: richTextToString(
            summary.rich_text as TextRichTextItemResponse[]
          ),
        }
      : {}),
    ...(locations && locations.type === "multi_select"
      ? {
          locations: locations.multi_select.map(({ name }) => name),
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
