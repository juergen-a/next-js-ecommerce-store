import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { type Sql } from 'postgres';

config();

// Making a variable accessible (through 'global object') in all environments (node, browser, ...) where JS is running
declare namespace globalThis {
  let postgresSqlClient: Sql;
}

// Defining handler function to fetch data onLoad of website
function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
}

// Making function accessible thus 'callable' all over the app
export const sql = connectOneTimeToDatabase();
