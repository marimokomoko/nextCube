import { getAllPosts } from "@/lib/api"
import Container from "@/components/container"
import Hero from "@/components/hero"
import Meta from "@/components/meta"
// ローカル代替アイキャッチ画像
import { eyecatchLocal } from "@/lib/constants"

export default function Home({ posts }) {
  return (
    <Container>
      <Meta pageTitle="" />
      <Hero title="CUBE" subtitle="アウトプットしていくおー" imageOn />
    </Container>
  )
}
