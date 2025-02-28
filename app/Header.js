// import { cookies } from 'next/headers';
import Link from 'next/link';
import CartComponent from './CartComponent';
import styles from './Header.module.scss';

// export async function
// const cart = (await cookies()).get('name')

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <div>
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <Link href="/products">Tshirts</Link>
          <Link href="/products">Shorts</Link>
        </nav>
        <Link href="/cart">
          <CartComponent />
        </Link>
      </div>
    </div>
  );
}
