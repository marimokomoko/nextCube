import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
})

export async function getPostBySlug(slug: string): Promise<any | undefined> {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log("----- getPostBySlug -----")
    console.log(err)
  }
}
