import Link from 'next/link';
import ButtonCheckout from '../ButtonCheckout';
import Header from '../Header';
import styles from './styles.module.scss';

export default function Contact() {
  return (
    <div className={styles.confirmation}>
      Confirmation
      <Header />
      <div className={styles.contentWrapper}>
        <div>Thank you. You will be redirected to the homepage.</div>
      </div>
    </div>
  );
}
