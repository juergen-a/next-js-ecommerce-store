'use server';
import { cookies } from 'next/headers';

// Case A: Cookie is undefined
// Case B: Cookie is set, productId does not exist
// Case C: Cookie is set, productId does exist

// Create cookies
export async function createCookies(productId, quantity) {
  // 1. Get current cookie
  const cartCookies = (await cookies()).get('cart');

  // .then ...

  // 2. Parse the cookie value back from string to object - Case A, Case B || C
  const cartCookiesParsed = !cartCookies
    ? []
    : JSON.parse(cartCookies.value).map((item) => {
        return { ...item, quantity: Number(item.quantity) };
      });

  console.log('Action-parsed:', cartCookiesParsed);

  // 3. Find cookie value
  const cookieToUpdate = cartCookiesParsed.find((cartCookieParsed) => {
    return cartCookieParsed.productId === productId;
  });

  console.log('Action-toUpdate:', cookieToUpdate);

  if (!cookieToUpdate) {
    // ... a new object with the arguments passed in from the form element/object will be created
    cartCookiesParsed.push({ productId: productId, quantity: quantity });
  } else {
    cookieToUpdate.quantity =
      Number(cookieToUpdate.quantity) + Number(quantity);
  }

  // .then ... set('cookie', existingUpdatedCookies) ==> If there is no object to update, a new cookie will be set referring to 'cartCookiesParsed'
  (await cookies()).set('cart', JSON.stringify(cartCookiesParsed));
}
