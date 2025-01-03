import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  })

  return response.items
}

export async function getBlogPost(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })

  return response.items[0]
}

