// import Image from 'next/image';
import Footer from './Footer';
import Header from './Header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      {/* Landing page content - Components will be entered here */}
      <Footer />
    </div>
  );
}
