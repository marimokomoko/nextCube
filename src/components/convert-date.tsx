import { parseISO, format } from "date-fns"
import { ja } from "date-fns/locale"

// Propsの型定義
type ConvertDateProps = {
  dateISO: string // ISO形式の日付文字列
}

export default function ConvertDate({ dateISO }: ConvertDateProps) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  )
}
