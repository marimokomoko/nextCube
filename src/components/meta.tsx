import Head from "next/head"
import { siteMeta } from "@/lib/constants"
import { useRouter } from "next/router"
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

type MetaProps = {
  pageTitle?: string
  pageDesc?: string
}

export default function Meta({ pageTitle, pageDesc }: MetaProps) {
  // ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  // ページ説明
  const desc = pageDesc ?? siteDesc
  // ページURL
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:site_type" content={siteType} />
      <meta property="og:site_locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <line ref="apple-touch-icon" href={siteIcon} />

    </Head>
  )
}
