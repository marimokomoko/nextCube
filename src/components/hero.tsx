import styles from "@/styles/hero.module.css"
import Image from "next/image"
import cube from "@/images/cube.jpg"

type HeroProps = {
  title: string
  subtitle: string
  imageOn?: boolean
}

export default function Hero({ title, subtitle, imageOn = false }: HeroProps) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          <Image
            src={cube}
            alt=""
            layout="responsive" // Next13~では削除。size設定は別途必要
            priority
            // placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
