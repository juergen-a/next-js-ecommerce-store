'use client';
// import { useState } from 'react';
import { deleteCookies } from './action';

export default function DeleteCookieForm(props) {
  //  const [quantity, setQuantity] = useState(1);

  console.log('DeleteCookieForm:', props);

  return (
    <form>
      <button formAction={() => deleteCookies(props.productId)}>Remove</button>
    </form>
  );
}
