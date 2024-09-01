import styles from "@/styles/post-header.module.css"

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
      {publish && <div className={styles.publish}>{publish}</div>}
    </div>
  )
}
