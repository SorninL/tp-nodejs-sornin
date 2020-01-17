const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
/*
CONFIG MYSQL HERE
 */
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aston'
});
let importToDatabase = (filePath) => {
  const file = fs.readFileSync(filePath);
  const parsedFile = JSON.parse(file);
  if (parsedFile && (parsedFile.length > 0)) {
    for (let i=0;i<parsedFile.length;i++) {
      let query = conn.query(`INSERT INTO ingredients SET ?`, parsedFile[i], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Ingedient ${parsedFile[i].label} added to table ingredients`);
        }
      });
    }
  }
};
module.exports = {importToDatabase};