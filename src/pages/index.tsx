import Container from "@/components/container"
import Hero from "@/components/hero"
import Meta from "@/components/meta"

export default function Home() {
  return (
    <Container>
      <Meta pageTitle=""/>
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくおー"
        imageOn
      />
    </Container>
  )
}
