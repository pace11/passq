const sqlite3 = require("sqlite3");
const path = require('path');

const dbPath = path.resolve(__dirname, './data.sqlite');

// Initialize the database
const db = new (sqlite3.verbose().Database)(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  }
});

module.exports = { db };
