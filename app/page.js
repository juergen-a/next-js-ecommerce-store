import Footer from './Footer';
import Header from './Header';
import LandingBrand from './LandingBrand';
import LandingNews from './LandingNews';
import LandingProduct from './LandingProduct';
// import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <LandingBrand />
      <LandingProduct />
      <LandingNews />
      {/* Landing page content - Components will be entered here */}
      <Footer />
    </div>
  );
}
