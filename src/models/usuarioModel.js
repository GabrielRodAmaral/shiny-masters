const database = require("../database/db");

function register(email, password) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email, password);

    let sqlCommand = `
    INSERT INTO usuario (email, senha) VALUES (?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);
    // return database(sqlCommand);
    return new Promise((resolve, reject) => {
        database.query(sqlCommand, [email, password], (error, result) => {
            if (error) {
                console.error("Erro ao cadastrar:", error);
                reject(error);
            } else {
                console.log("Registro inserido com sucesso.");
                resolve(result);
            }
        });
    });
}

module.exports = { register };