import { Client } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function getBlocks(pageId: string, notion: Client) {
  let res;
  const blocks: BlockObjectResponse[] = [];
  do {
    res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: (res && res.next_cursor) || undefined,
    });
    blocks.push(...(res.results as BlockObjectResponse[]));
  } while (res.has_more);
  // cacheBlocksImages(blocks);
  return blocks;
}
