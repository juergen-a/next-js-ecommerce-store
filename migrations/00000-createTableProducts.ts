import type { Sql } from 'postgres';

export type Product = {
  productId: number;
  productName: string;
  productColor: string;
  productPrice: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      product_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      product_name varchar(30) NOT NULL,
      product_color varchar(30) NOT NULL,
      product_price numeric CONSTRAINT positive_price CHECK (product_price > 0)
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
