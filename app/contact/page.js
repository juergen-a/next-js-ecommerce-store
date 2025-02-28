import Link from 'next/link';
import ButtonCheckout from '../ButtonCheckout';
import Header from '../Header';
import styles from './styles.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      Contact details
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapperLeft} />
        <div className={styles.contentWrapperRight}>
          <Link href="/confirmation">
            <ButtonCheckout />
          </Link>
        </div>
      </div>
    </div>
  );
}
