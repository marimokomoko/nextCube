import styles from "@/styles/post-body.module.css"
import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    large?: boolean
  }

export default function PostBody({ children }: ContainerProps) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}