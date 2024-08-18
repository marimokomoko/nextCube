import styles from "@/styles/two-column.module.css"
import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode;
}

export function TwoColumn({ children }: ContainerProps) {
    return (
        // 全体グループ化
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColumnMain({ children }: ContainerProps) {
    return (
        // メインコンテンツ
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function TwoColumnSidebar({ children }: ContainerProps) {
    return (
        // サイドバーコンテンツ
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}