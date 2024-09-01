import styles from "@/styles/post-header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import ConvertDate from "./convert-date"

type PostHeaderProps = {
  title: string | null
  subtitle: string | null
  publish: string | null
}

// blogヘッダーコンポーネント
export default function PostHeader({
  title,
  subtitle,
  publish = "",
}: PostHeaderProps) {
  return (
    <div className={styles.stack}>
      <p className={styles.stack}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
