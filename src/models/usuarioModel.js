const database = require("../database/db");

function register(email, password) {
    let sqlCommand = `
    INSERT INTO usuario (email, senha) VALUES (?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);
    
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

function enterBox(email, password) {
    let sqlCommand = `
    SELECT idTreinador, email, senha FROM usuario WHERE email = '${email}' AND senha = '${password}'
    `;

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, (error, result) => {
            if (error) {
                console.error("Erro ao consultar dados:", error);
                reject(error);
            } else {
                if (result.length > 0) {
                    console.log("Login bem-sucedido");
                    resolve(result);
                } else {
                    console.log(result.length)
                    console.log("Login falhou");
                    resolve(null);
            }
            }
        });
    });
}

module.exports = { register, enterBox};