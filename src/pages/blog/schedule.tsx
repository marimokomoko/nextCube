import { getPostBySlug } from "@/lib/api" // APIから投稿を取得する関数をインポート
import Container from "@/components/container" // コンテナコンポーネントをインポート
import PostHeader from "@/components/post-header" // カテゴリヘッダーをインポート
import PostBody from "@/components/post-body"
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column"
import Image from "next/image"

// Schedule コンポーネントに渡すプロパティの型定義
type ScheduleProps = {
  title: string | null
  publish: string | null
  content: string | null
  eyecatch: {
    url: string | null
    width: number | null
    height: number | null
  } | null
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
      <article>
        <PostHeader title={title} subtitle="BlogArticle" publish={publish} />

        {eyecatch && eyecatch.url && eyecatch.width && eyecatch.height && (
          <figure>
            <Image
              src={eyecatch.url}
              alt=""
              layout="responsive"
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
            />
          </figure>
        )}
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              {content && (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            {/* サイドバーに何も表示しない場合でも、空のdivを渡す */}
            <div></div>
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
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
      publish: post.publishDate || null,
      content: post.content || null,
      eyecatch: post.eyecatch || null,
      categories: post.categories || [],
    },
  }
}
