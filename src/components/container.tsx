import styles from '@/styles/container.module.css';
import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    large?: boolean
  }

export default function Container({ children, large = false }: ContainerProps) {
    return (
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}