import { getPostBySlug } from "@/lib/api" // APIから投稿を取得する関数
import { extractText } from "@/lib/extract-text" // HTMLからテキストを抽出するための関数
import Meta from "@/components/meta" // メタ情報設定コンポーネント
import Container from "@/components/container" // コンテンツ全体を包むコンテナコンポーネント
import PostHeader from "@/components/post-header" // 投稿ページのヘッダー部分（タイトルや公開日）
import PostBody from "@/components/post-body" // 投稿本文のスタイリングを担当するコンポーネント
import PostCategories from "@/components/post-categories" // カテゴリ表示コンポーネント
import {
  TwoColumn, // 2カラムレイアウトのベースコンポーネント
  TwoColumnMain, // メインコンテンツ部分のカラム
  TwoColumnSidebar, // サイドバー部分のカラム
} from "@/components/two-column" // 2カラムレイアウトに関するコンポーネント群
import ConvertBody from "@/components/convert-body" // HTMLコンテンツを変換して表示するコンポーネント
import Image from "next/image" // Next.jsの最適化された画像表示コンポーネント
import { eyecatchLocal } from "@/lib/constants" // ローカル代替アイキャッチ画像

// Schedule コンポーネントに渡すプロパティの型定義
type ScheduleProps = {
  title: string | null // 投稿タイトル
  publish: string | null // 公開日
  content: string | null // 投稿本文のHTML
  eyecatch: {
    url: string | null // アイキャッチ画像のURL
    width: number | null // 画像の幅
    height: number | null // 画像の高さ
  } | null // アイキャッチ画像に関するプロパティ
  categories: Array<{ name: string; slug: string }> // カテゴリの配列
  desctiption: string | null // 投稿本文から抽出したテキスト
}

// Schedule コンポーネント
export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  desctiption,
}: ScheduleProps) {
  return (
    <Container>
      {/* メタ情報の設定 */}
      <Meta
        pageTitle={title || undefined}
        pageDesc={desctiption || undefined}
        pageImg={eyecatch?.url || undefined}
        pageImgW={eyecatch?.width || undefined}
        pageImgH={eyecatch?.height || undefined}
      />
      <article>
        {/* 記事ヘッダー */}
        <PostHeader title={title} subtitle="BlogArticle" publish={publish} />

        {/* アイキャッチ画像 */}
        {eyecatch && eyecatch.url && eyecatch.width && eyecatch.height && (
          <figure>
            <Image
              src={eyecatch.url}
              alt="" // 代替テキストを空に設定
              layout="responsive" // レスポンシブレイアウトに対応
              width={eyecatch.width} // 画像の幅
              height={eyecatch.height} // 画像の高さ
              sizes="(min-width: 1152px) 1152px, 100vw" // 画面サイズに応じたサイズ指定
              priority // 高い優先度で画像をロード
            />
          </figure>
        )}
        {/* 2カラムレイアウト */}
        <TwoColumn>
          <TwoColumnMain>
            {/* 投稿本文 */}
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            {/* カテゴリ表示 */}
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

// APIデータ取得関数（静的生成用）
export async function getStaticProps() {
  const slug = "micro" // 固定のslugを使用してデータを取得
  const post = await getPostBySlug(slug) // APIから投稿データを取得
  const desctiption = extractText(post.content) // 投稿本文のHTML文字列からテキストを抽出
  const eyecatch = post.eyecath ?? eyecatchLocal // アイキャッチ画像が存在しない場合ローカル画像を設定
  return {
    props: {
      title: post.title || null, // タイトル
      publish: post.publishDate || null, // 公開日
      content: post.content || null, // 投稿本文
      eyecatch: eyecatch || null, // アイキャッチ画像情報
      categories: post.categories || [], // カテゴリ
      desctiption: desctiption, // 抽出されたテキスト
    },
  }
}
