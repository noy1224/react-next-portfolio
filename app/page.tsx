import styles from './page.module.css'
import Image from 'next/image'

import { getNewsList } from '@/app/_libs/microcms'
import { TOP_NEWS_LIMIT } from '@/app/_constants'
import NewsList from '@/app/_components/_NewsList'
import ButtonLink from '@/app/_components/ButtonLink'

export const revalidate = 60

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  })
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>世界の建造物紹介サイト</h1>
          <p className={styles.description}>
            世界中の様々な建物を紹介します。ぜひ世の知識を高めてください
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/25957752.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>建造物</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  )
}