'use client';
import { useState } from 'react';
import { createCookies } from './actions';
import styles from './SetCookieForm.module.scss';

export default function SetCookieForm(props) {
  const [quantity, setQuantity] = useState(1);

  console.log('SetCookieForm:', quantity);

  return (
    <form className={styles.form}>
      <input
        onChange={(event) => setQuantity(event.currentTarget.value)}
        type="number"
        min="1"
        value={quantity}
      />

      <button formAction={() => createCookies(props.productId, quantity)}>
        Add to cart
      </button>
    </form>
  );
}
