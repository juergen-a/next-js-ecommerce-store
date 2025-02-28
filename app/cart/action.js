'use server';
import { cookies } from 'next/headers';

// Case A: Cookie is undefined
// Case B: Cookie is set, productId does not exist
// Case C: Cookie is set, productId does exist

// Create cookies
export async function deleteCookies(productId) {
  // 1. Get current cookie
  const cartCookies = (await cookies()).get('cart');

  // .then ...

  // 2. Parse the cookie value back from string to object - Case A, Case B || C
  const cartCookiesParsed = !cartCookies
    ? []
    : JSON.parse(cartCookies.value).map((item) => {
        return { ...item, productId: Number(item.productId) };
      });

  // 3. Find cookie value to delete (productId) --> filter those cart cookies !== productId --> store
  const cookiesToRemain = cartCookiesParsed.filter((cartCookiesRemain) => {
    return cartCookiesRemain.productId !== productId;
  });

  if (cookiesToRemain) {
    // Set new cookie value for remaining products if cookies exist ...
    (await cookies()).set('cart', JSON.stringify(cookiesToRemain));
    // ...
  } else {
    return;
  }
}
