import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';


const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});


if (!process.env.NOTION_TOKEN) {
  console.warn('NOTION_TOKEN is not defined in environment variables.');
}


const n2m = new NotionToMarkdown({ notionClient: notion });


export async function getDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    console.warn('NOTION_DATABASE_ID is not defined in environment variables.');
    return [];
  }


  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      status: {
        equals: 'published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

