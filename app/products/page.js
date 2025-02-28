import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import Header from '../Header';
import styles from './styles.module.scss';

// Get products from product page

export default async function Products() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.products}>
      <Header />
      <div>
        <ul>
          {products.map((product) => {
            return (
              <li key={`product-${product.productId}`}>
                <Link href={`/products/${product.productId}`}>
                  <div>
                    <Image
                      src="/images/Ecomm_placeholder_Tshirt.webp"
                      alt="Image of T-shirt"
                      fill={true}
                    />
                  </div>

                  <div>
                    <h1>{product.productName}</h1>
                    <div>Color: {product.productColor}</div>
                    <div>Price: {product.productPrice}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
