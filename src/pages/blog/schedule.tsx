import { getPostBySlug } from "@/lib/api" // APIから投稿を取得する関数をインポート
import Container from "@/components/container" // コンテナコンポーネントをインポート

// Schedule コンポーネントに渡すプロパティの型定義
type ScheduleProps = {
  title: string | null
  publish: string | null
  content: string | null
  eyecatch: {
    url: string | null
    width: number | null
    height: number | null
  }
  categories: Array<{ name: string; slug: string }> // カテゴリの配列
}

// Schedule コンポーネント
export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}: ScheduleProps) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

// APIデータ取得関数
export async function getStaticProps() {
  const slug = "schedule" // 固定のslugを使用してデータを取得
  const post = await getPostBySlug(slug) // APIから投稿データを取得
  console.log(post)

  return {
    props: {
      title: post.title || null,
      publish: post.publish || null,
      content: post.content || null,
      eyecatch: post.eyecatch || null,
      categories: post.categories || [],
    },
  }
}
