import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="ホームボタン.jpg"
          alt=""
          className={styles.logo}
          width={500}
          height={250}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}