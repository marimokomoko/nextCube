import Head from "next/head"

type MetaProps = {
  pageTitle: string
}

export default function Meta({ pageTitle }: MetaProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
    </Head>
  )
}
