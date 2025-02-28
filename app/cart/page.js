import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import ButtonCheckout from '../ButtonCheckout';
import Header from '../Header';
import DeleteCookieForm from './DeleteCookieForm';
import styles from './styles.module.scss';

export default async function Cart() {
  const products = await getProductsInsecure();

  // 1. Get current cookie
  const cartCookies = (await cookies()).get('cart');

  // .then ...

  // 2. Parse the cookie value back from string to object - Case A, Case B || C
  const cartCookiesParsed = !cartCookies ? [] : JSON.parse(cartCookies.value);

  // Calculate the 'total price'
  const total = cartCookiesParsed.reduce((acc, cartItem) => {
    // Iterating over 'cartsCookiesParsed' and ...
    // 1. Check if productId in cart === productId in products => Store product objects
    const productBase = products.find(
      (product) => cartItem.productId === product.productId,
    );

    // 2. Check if there are product objects from step 1 available (prevent undefined) => then calculate for every iterated item the 'itemTotal'
    // 3. => The 'itemTotal' will be returned out adding the cb-func (acc + itemTotal) to the 'running rate'(subtotal)
    if (productBase) {
      const itemTotal = cartItem.quantity * productBase.productPrice; // Calculate total for this item
      return acc + itemTotal; // Add to the running total
    }

    return acc; // If no match is found, return the current total
  }, 0); // Start with an initial total of 0

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapperLeft}>
          <div>
            <div>Cart: </div>
            <span>quantity </span>
          </div>
          <div className={styles.itemContainerLeft}>
            <div>
              {products.map((productBase) => {
                // Check, which product objects match those productId's in the cart
                const productCart = cartCookiesParsed.find(
                  (productCookie) =>
                    productBase.productId === productCookie.productId,
                );

                // Check if product is in productCart to prevent undefined && then compare productIds
                if (
                  productCart &&
                  productCart.productId === productBase.productId
                ) {
                  // Calculate the item total
                  const itemTotal =
                    productBase.productPrice * productCart.quantity;

                  return (
                    <div
                      key={`productBase-${productBase.productId}`}
                      className={styles.itemLeft}
                    >
                      <div className={styles.imageWrapper}>image-wrapper</div>
                      <div className={styles.infoWrapper}>
                        <div>
                          <div>{productBase.productName}</div>
                          <div>Color: {productBase.productColor}</div>
                          <div>Quantity: {productCart?.quantity}</div>
                          <div>Price: {productBase.productPrice}</div>
                        </div>
                        <div>Subtotal: {itemTotal ? itemTotal : 0}</div>
                        <DeleteCookieForm productId={productBase.productId} />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <div className={styles.contentWrapperRight}>
          <div>Total: {total ? total : 0}</div>
          <Link href="/contact">
            <ButtonCheckout />
          </Link>
        </div>
      </div>
    </div>
  );
}
