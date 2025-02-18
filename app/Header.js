import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/Tshirts">Tshirts</Link>
          <Link href="/Shorts">Shorts</Link>
        </nav>
      </div>
    </div>
  );
}
