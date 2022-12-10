import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ExtendedBlockObjectResponse } from "statikon";
import getBlocks from "./getBlocks";

export type DatabasePage = PageObjectResponse & {
  blocks: ExtendedBlockObjectResponse[];
};

export async function getDatabase(
  notion: Client,
  databaseId: string,
  params: object = {}
): Promise<DatabasePage[]> {
  let res;
  const pages: PageObjectResponse[] = [];

  do {
    res = await notion.databases.query({
      database_id: databaseId,
      start_cursor: (res && res.next_cursor) || undefined,
      ...params,
    });
    pages.push(...(res.results as PageObjectResponse[]));
  } while (res.has_more);

  const _pages = await Promise.all(
    pages.map(async (page) => ({
      ...page,
      blocks: await getBlocks(page.id, notion),
    }))
  );

  return _pages;
}
