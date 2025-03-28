/**
* Migrates the database schema upward, making changes to bring the schema toward the latest version.
* @param client - The libsql client to use when migrating.
* @returns { Promise<void> }
*/
export async function up(client) {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname VARCHAR(250) NOT NULL,
        lastname VARCHAR(250) NOT NULL,
        email VARCHAR(250) UNIQUE NOT NULL,
        phone INTEGER,
        password TEXT NOT NULL,
        role VARCHAR(250) NOT NULL CHECK (role IN ('admin','commercant','user')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        delete_at TIMESTAMP
      );
    `);
  }
  
  /**
  * Migrates the database schema downward, making changes to roll the schema back to a previous version.
  * @param client - The libsql client to use when migrating.
  * @returns { Promise<void> }
  */
  export async function down(client) {
    await client.execute(`
      DROP TABLE users;
    `);
  }
  