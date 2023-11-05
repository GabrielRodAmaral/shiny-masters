const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "shinyMaster",
    password: "masterTrainer99",
    database: "shinyMasters",
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Erro na conexão com o banco de dados:", err);
    } else {
      console.log("Sucesso na conexão com o banco de dados");
    }
  });
  
  module.exports = connection;