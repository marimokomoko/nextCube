import Container from "@/components/container";
import Hero from "@/components/hero";
import Posts from "@/components/posts";
import { getAllPosts } from "@/lib/api";
import Meta from "@/components/meta";
import { eyecatchLocal } from "@/lib/constants";

// Postの型定義
type Post = {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    // blurDataURL: string;
  };
};

// propsの型定義
type BlogProps = {
  posts: Post[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <Container>
      {/* ページメタデータ */}
      <Meta pageTitle="blog" pageDesc="ブログ記事一覧" />
      {/* Heroセクション */}
      <Hero title="Blog" subtitle="Recent Posts" />
      {/* 投稿リスト */}
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  // 全てのブログ投稿を取得
  const posts = await getAllPosts();

  // 代替画像データを取得
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    // 取得した投稿をpropsとしてBlogコンポーネントに渡す
    props: {
      posts,
    },
  };
}
