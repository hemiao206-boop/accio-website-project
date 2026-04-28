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

  return response.results.map((page: any) => {
    return {
      id: page.id,
      slug: page.properties.Slug.rich_text[0]?.plain_text,
      title: page.properties.Title.title[0]?.plain_text,
      date: page.properties.Date.date?.start,
      excerpt: page.properties.Excerpt.rich_text[0]?.plain_text,
      image: page.properties.Image.url || page.properties.Image.files[0]?.file?.url || page.properties.Image.files[0]?.external?.url,
      category: page.properties.Category.select?.name,
    };
  });
}

export async function getPost(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return null;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  if (!page) return null;

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    title: (page as any).properties.Title.title[0]?.plain_text,
    date: (page as any).properties.Date.date?.start,
    image: (page as any).properties.Image.url || (page as any).properties.Image.files[0]?.file?.url || (page as any).properties.Image.files[0]?.external?.url,
    category: (page as any).properties.Category.select?.name,
    content: mdString.parent,
  };
}
