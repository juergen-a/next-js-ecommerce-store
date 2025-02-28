import { cache } from 'react';
import { sql } from './connect';

type Product = {
  productId: number;
  productName: string;
  productColor: string;
  productPrice: number;
};

// Fetching data from DB -> Querying all products
export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
});

// Fetching data from DB -> Querying single product --> response object is wrapped in an Array --> array destructuring to access the response object
export const getProductInsecure = cache(async (productId: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      product_id = ${productId}
  `;

  // console.log('Product:', product);

  return product;
});

// Traditional approach - without optimised caching of the data retrieving function from built-in next.js caching() method

// export async function GetAllProducts() {
//   await sql`
//     SELECT
//       *
//     FROM
//       products
//   `;
// return products
// }

// Query only those products requested -> from deleted placeholder data
// export function GetSingleProduct(productId) {
//   return products.find((product) => product.productId === productId);
// }
