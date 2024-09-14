import { GetStaticPropsContext } from "next"
import Meta from "@/components/meta"
import { getAllCategories, getAllPostsByCategory } from "@/lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import Posts from "@/components/posts"
import { eyecatchLocal } from "@/lib/constants"

// Post の型定義
type Post = {
  title: string
  slug: string
  eyecatch?: { url: string } // eyecatchは{url: string}形式に修正
}

// プロパティの型定義
type CategoryProps = {
  name: string | null
  posts: Post[] | null
}

// カテゴリーページコンポーネント
export default function Category({ name, posts }: CategoryProps) {
  return (
    <Container>
      {/* Metaコンポーネントにデフォルト値を設定 */}
      <Meta pageTitle={name ?? "Default Title"} pageDesc={`${name ?? "Default Title"}に関する記事`} />
      {/* PostHeaderにpublishを追加 */}
      <PostHeader title={name ?? "Default Title"} subtitle="Blog Category" publish="Default Publish Date" />
      <Posts posts={posts} />
    </Container>
  )
}

// 静的パスを生成するための関数
export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }: { slug: string }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

// 静的プロパティを取得するための関数
export async function getStaticProps(context: GetStaticPropsContext) {
  const catSlug = context.params?.slug as string

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug)

  if (!cat) {
    return {
      notFound: true, // カテゴリが見つからなければ404エラーを返す
    }
  }

  const posts = await getAllPostsByCategory(cat.id)

  // eyecatchがない場合はデフォルト画像を設定
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch") || typeof post.eyecatch === "string") {
      post.eyecatch = { url: eyecatchLocal } // eyecatchを{url: string}形式に修正
    }
  }

  return {
    props: {
      name: cat.name,
      posts: posts || [],
    },
  }
}
