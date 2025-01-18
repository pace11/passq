const sqlite3 = require("sqlite3");

// Initialize the database
const db = new (sqlite3.verbose().Database)("./db/data.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  }
});

module.exports = { db };
