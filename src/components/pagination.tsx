import styles from "@/styles/pagination.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

// ページネーションコンポーネントを定義
export default function Pagination({
  // 未指定の場合は値を空に設定
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}) {
  return (
    <ul className={styles.flexContainer}>
      {prevText &&
        prevUrl && ( // 前のページがある場合にリンクを表示
          <li className={styles.prev}>
            <Link href={prevUrl} className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
              <span>{prevText}</span>
            </Link>
          </li>
        )}
      {nextText &&
        nextUrl && ( // 次のページがある場合にリンクを表示
          <li className={styles.next}>
            <Link href={nextUrl} className={styles.iconText}>
              <span>{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
            </Link>
          </li>
        )}
    </ul>
  )
}
