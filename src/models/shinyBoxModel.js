const database = require("../database/db")

function registerPoke(pokeId, pokeName, pokeSprite, fkRegion, idShinyBox) {
    let sqlCommand = `
    INSERT INTO pokemon (idPokemon, nome, sprite, fkRegiao) VALUES (?, ?, ?, ?);
    `;

    let sqlCommand2 = `
    INSERT INTO captura (fkShinyBox, fkPokemon) VALUES (?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);

    return new Promise((resolve, reject) => {
    database.query(sqlCommand, [pokeId, pokeName, pokeSprite, fkRegion], (error, result) => {
        if (error) {
            console.error("Erro ao cadastrar:", error);
            reject(error);
        } else {
            console.log("Registro inserido com sucesso.");
            resolve(result);
        }
    });
    return new Promise((resolve, reject) => {
        database.query(sqlCommand2, [idShinyBox, pokeId], (error, result) => {
            if (error) {
                console.error("Erro ao cadastrar:", error);
                reject(error);
            } else {
                console.log("Registro inserido com sucesso.");
                resolve(result);
            }
        });
    });
});

}

module.exports = {registerPoke}