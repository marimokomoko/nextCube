import { convert } from "html-to-text"

export function extractText(
  html: string, // HTMLは文字列
  length: number = 80, // 長さはオプションで数値
  more: string = "..." // 'more' も文字列
): string {
  if (!html) return "" // htmlが空なら空文字列を返す

//   console.log("-------------------")
//   console.log(html)

  const text = convert(html, {
    selectors: [
      { selector: "img", format: "skip" }, // imgタグをスキップ
      { selector: "a", options: { ignoreHref: true } }, // リンクはhrefを無視
    ],
  })

  return text.slice(0, length) + more // 指定された長さでテキストを切り、moreを追加
}
