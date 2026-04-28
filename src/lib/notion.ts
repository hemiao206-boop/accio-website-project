import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return [];

  try {
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

    return response.results.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
      title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
      date: page.properties.Date?.date?.start || '',
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      image: page.properties.Image?.url || page.properties.Image?.files?.[0]?.file?.url || page.properties.Image?.files?.[0]?.external?.url || '',
      category: page.properties.Category?.select?.name || 'Journal',
    })).filter((p) => p.slug);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getPost(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return null;

  try {
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
      title: (page as any).properties.Title?.title?.[0]?.plain_text || 'Untitled',
      date: (page as any).properties.Date?.date?.start || '',
      image: (page as any).properties.Image?.url || (page as any).properties.Image?.files?.[0]?.file?.url || (page as any).properties.Image?.files?.[0]?.external?.url || '',
      category: (page as any).properties.Category?.select?.name || 'Journal',
      content: mdString.parent,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}
