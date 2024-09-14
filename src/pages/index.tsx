import { getAllPosts } from "@/lib/api"
import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import Posts from "@/components/posts"
import Pagination from "@/components/pagination"
// ローカル代替アイキャッチ画像
import { eyecatchLocal } from "@/lib/constants"

// 記事の型定義
type Post = {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
};

// HomeコンポーネントのProps型定義
type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps ) {
  console.log("home")
  return (
    <Container>
      {/* ページのメタ情報を設定 */}
      <Meta pageTitle="" />
      {/* ヒーローセクション */}
      <Hero title="CUBE" subtitle="アウトプットしていくおー" imageOn />

      {/* 記事一覧の表示 */}
      <Posts posts={posts} />

      {/* ページネーションの表示 */}
      <Pagination nextUrl="/blog" nextText="More" />
    </Container>
  )
}

export async function getStaticProps() {
  // 最新4件の記事データを取得
  const posts = await getAllPosts(4)
  console.log("=============")
  console.log("Posts:", posts)  // デバッグ用のログ

  // 各記事にeyecatchがない場合はローカルの代替アイキャッチ画像を設定
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal
    }
  }
  // 取得したデータをpropsとしてコンポーネントに渡す
  return {
    props: {
      posts: posts,
    },
  }
}
