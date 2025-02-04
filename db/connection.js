const sqlite3 = require("sqlite3");
const path = require('path');

const dbPath = path.resolve(__dirname, './data.sqlite');

// Initialize the database
const db = new (sqlite3.verbose().Database)(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    // Create tables if they don't exist
    db.serialize(() => {
      db.run(
        `CREATE TABLE IF NOT EXISTS passwords (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          password TEXT,
          last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
          if (!err) {
            console.log("Fetching data..");
          }
        }
      );
    });
  }
});

module.exports = { db };
