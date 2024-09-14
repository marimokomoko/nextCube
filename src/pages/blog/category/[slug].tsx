import { GetStaticPropsContext } from "next"
import { getAllCategories } from "@/lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header"

// プロパティの型定義
type CategoryProps = {
    name: string;
    posts: string; // 公開日プロパティ
}

// カテゴリーページコンポーネント
export default function Category({ name, posts }: CategoryProps) {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
    </Container>
  )
}

// 静的パスを生成するための関数
export async function getStaticPaths() {
    const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const catSlug = context.params?.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug)

  return {
    props: {
      name: cat.name,
    },
  }
}
