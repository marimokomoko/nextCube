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
