type Post = {
  title: string
  slug: string
}

export function prevNextPost(
  allSlugs: Post[], // getAllSlug()で取得した全記事のtitleとslug
  currentSlug: string, // 現在の記事slug
): [Post, Post] {
  const numberOfPosts = allSlugs.length

  // 現在の投稿のインデックスを取得
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug)

  // 前の記事を取得
  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1]

  // 次の記事を取得
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1]

  return [prevPost, nextPost]
}
