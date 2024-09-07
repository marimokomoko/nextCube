import { createClient } from "microcms-js-sdk"

// microCMS クライアントの作成
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string, // サービスドメインを環境変数から取得
  apiKey: process.env.API_KEY as string, // APIキーを環境変数から取得
})

// slug に基づいて特定の投稿を取得する関数
export async function getPostBySlug(slug: string): Promise<any | undefined> {
  try {
    // APIリクエストを送信し、特定の slug に一致するブログ記事を取得
    const post = await client.get({
      endpoint: "blogs", // 取得対象のエンドポイント
      queries: { filters: `slug[equals]${slug}` }, // slug が一致する記事をフィルタリング
    })

    // 取得した記事の最初のエントリを返す
    return post.contents[0]
  } catch (err) {
    // エラーが発生した場合にエラーメッセージをコンソールに出力
    console.log("----- getPostBySlug -----")
    console.log(err)
  }
}

// 全てのslug（投稿の識別子）を100件まで取得する関数
export async function getAllSlugs(limit = 100) {
  try {
    // APIリクエストを送信し、指定した数(limit)のslug（タイトルとslug）を取得
    const slugs = await client.get({
      endpoint: "blogs", // 取得対象のエンドポイント
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit } // 取得するフィールドや並び順、取得数の指定
    })
    return slugs.contents // 取得された内容（記事の配列）を返す
  } catch (err) {
    // エラーが発生した場合にエラーメッセージをコンソールに出力
    console.log("-- getAllSlugs --")
    console.log(err) // エラー内容を表示
  }
}
