const mysql = require('mysql');

const mySQL = mysql.createConnection({
  host: 'pifiles',
  user: 'jeroen',
  password: '!xjer56!',
  database: 'jotawebsite',
})

mySQL.connect((err) => {
  if (err) {
    console.log("Fout bij verbinding database");
    return;
  }
  console.log('Database verbonden');
})

module.exports = mySQL