const clipboardy = require("clipboardy");
const { db } = require("./connection.js");

const generateDb = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS passwords (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          password TEXT,
          last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
    (err) => {
      if (err) {
        console.log("Error creating table ❌");
      } else {
        console.log("Table created ✅");
      }
    }
  );
};

/**
 *
 * @param {string} param.id
 */
const getData = ({ id = "" }) => {
  db.all(
    `SELECT * FROM passwords ${id ? `WHERE id=${id}` : ""}`,
    [],
    (err, rows) => {
      if (err) {
        console.error("Error getting data ❌", err.message);
      } else {
        console.log(`Total: ${rows.length} data`);
        console.table(rows);
      }
    }
  );
};

/**
 *
 * @param {string} param.id
 */
const copyData = ({ id = "" }) => {
  db.all(`SELECT * FROM passwords WHERE id=${id}`, [], (err, rows) => {
    if (err) {
      console.error("Error getting data ❌", err.message);
    } else {
      if (rows.length > 0) {
        clipboardy.writeSync(rows[0].password);
        console.log("Text copied to clipboard ✅");
      } else {
        console.log("Not found data ❌");
      }
    }
  });
};

/**
 *
 * @param {string} param.title
 * @param {string} param.password
 */
const createData = ({ title = "", password = "" }) => {
  db.run(
    `INSERT INTO passwords (title, password) VALUES (?, ?)`,
    [title, password],
    function (err) {
      if (err) {
        console.error("Error creating data ❌", err.message);
      } else {
        console.log("Data created ✅ ", { id: this.lastID, title, password });
      }
    }
  );
};

/**
 *
 * @param {string} param.id
 */
const deleteData = ({ id = "" }) => {
  db.run(`DELETE FROM passwords WHERE id=${id}`, [], function (err) {
    if (err) {
      console.error("Error deleting data ❌", err.message);
    } else {
      console.log("Data deleted ✅");
    }
  });
};

module.exports = { generateDb, getData, copyData, createData, deleteData };
