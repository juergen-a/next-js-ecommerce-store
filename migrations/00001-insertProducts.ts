import type { Sql } from 'postgres';

const products = [
  {
    productId: 1,
    productName: 'T-shirt blue',
    productColor: 'blue',
    productPrice: 50,
  },
  {
    productId: 2,
    productName: 'T-shirt lightblue',
    productColor: 'lightblue',
    productPrice: 50,
  },
  {
    productId: 3,
    productName: 'T-shirt green',
    productColor: 'green',
    productPrice: 50,
  },
  {
    productId: 4,
    productName: 'T-shirt lightgreen',
    productColor: 'lightgreen',
    productPrice: 50,
  },

  {
    productId: 5,
    productName: 'T-shirt orange',
    productColor: 'orange',
    productPrice: 50,
  },
  {
    productId: 6,
    productName: 'T-shirt lightorange',
    productColor: 'lightorange',
    productPrice: 50,
  },
  {
    productId: 7,
    productName: 'T-shirt white',
    productColor: 'white',
    productPrice: 50,
  },
  {
    productId: 8,
    productName: 'T-shirt grey',
    productColor: 'grey',
    productPrice: 50,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          product_name,
          product_color,
          product_price
        )
      VALUES
        (
          ${product.productName},
          ${product.productColor},
          ${product.productPrice}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        product_id = ${product.productId}
    `;
  }
}
