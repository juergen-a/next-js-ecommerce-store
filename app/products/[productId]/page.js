import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductInsecure } from '../../../database/products';
import ButtonCheckout from '../../ButtonCheckout';
import Header from '../../Header';
import SetCookieForm from './SetCookieForm';
import styles from './styles.module.scss';

// Display specific meta data text on single product tab
export async function generateMetadata(props) {
  const product = getProductInsecure(Number((await props.params).productId));

  return {
    title: product.productName,
    description: 'Tshirt',
  };
}

// Single product page
export default async function SingleProduct(props) {
  const product = await getProductInsecure(
    Number((await props.params).productId),
  );

  // 1. Get current cookie
  const cartCookies = (await cookies()).get('cart');

  // .then ...

  // 2. Parse the cookie value back from string to object - Case A, Case B || C
  const cartCookiesParsed = !cartCookies ? [] : JSON.parse(cartCookies.value);

  // 3. Find cookie value
  const quantityToDisplay = cartCookiesParsed.find((cartCookieParsed) => {
    return cartCookieParsed.productId === product.productId;
  });

  return (
    <div className={styles.product}>
      <Header />
      <div className={styles.content}>
        <div>Image</div>
        <div>
          <div>
            <h1>{product.productName}</h1>
            <div>Color: {product.productColor}</div>
            <div>Price: {product.productPrice}</div>
            <SetCookieForm productId={product.productId} />
            <Link href="/contact">
              <ButtonCheckout />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
