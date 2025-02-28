import { cookies } from 'next/headers';

export default async function CartComponent() {
  // 1. Get current cookie
  const cartCookies = (await cookies()).get('cart');

  // .then ...

  // 2. Parse the cookie value back from string to object - Case A, Case B || C
  const cartCookiesParsed = !cartCookies ? [] : JSON.parse(cartCookies.value);

  // 3. Find cookie value
  const quantityArray = cartCookiesParsed.map((cartCookieParsed) => {
    return Number(cartCookieParsed.quantity);
  });

  const quantityToDisplay = quantityArray.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);

  return <div>cart quantity: {quantityToDisplay ? quantityToDisplay : 0} </div>;
}
