import styles from "@/styles/posts.module.css"
import Link from "next/link"
import Image from "next/image"

type Post = {
  title: string
  slug: string
  eyecatch?: {
    url: string
  }
}

type PostsProps = {
  posts: Post[] | null
}

export default function Posts({ posts }: PostsProps) {
  // posts が存在するかチェック
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>
  }
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`} passHref>
            <figure>
              {/* eyecatch が存在する場合 */}
              {eyecatch?.url ? (
                <Image
                  src={eyecatch.url}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
              ) : (
                <Image
                  src="/path-to-default-image.jpg" // デフォルト画像のパス
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 1152px) 576px, 50vw"
                />
              )}
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
