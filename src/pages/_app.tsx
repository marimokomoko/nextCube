import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "@/components/layout"
// Font Awesome設定
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false // SVGコアが個別にCSS適用されるのを無効化

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
