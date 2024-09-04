import parse, { domToReact } from "html-react-parser"
import Image from "next/image"

type ConvertBodyProps = {
    contentHTML: string | null
  }

export default function ConvertBody({ contentHTML }: ConvertBodyProps) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      // Nodeがelementであることを確認する型ガード
      if (node && node.type === "tag" && node.name === "img") {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            layout="responsive"
            src={src}
            width={Number(width)}
            height={Number(height)}
            alt={alt || ""}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        )
      }
      // 他のタグの場合はデフォルトの変換を適用
      return undefined
    },
  })

  return <>{contentReact}</>
}
