import { getAllPosts } from "@/lib/api"
import Meta from "@/components/meta"
import Container from "@/components/container"
import Hero from "@/components/hero"
import Posts from "@/components/posts"
import Pagination from "@/components/pagination"
// ローカル代替アイキャッチ画像
import { eyecatchLocal } from "@/lib/constants"

export default function Home({ posts }) {
  return (
    <Container>
      <Meta pageTitle="" />
      <Hero title="CUBE" subtitle="アウトプットしていくおー" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More" />
    </Container>
  )
}
