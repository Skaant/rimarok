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
  const pages = (
    await notion.databases.query({
      database_id: databaseId,
      ...params,
    })
  ).results as PageObjectResponse[];

  const _pages = await Promise.all(
    pages.map(async (page) => ({
      ...page,
      blocks: await getBlocks(page.id, notion),
    }))
  );

  return _pages;
}
