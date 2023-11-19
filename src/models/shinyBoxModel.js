const database = require("../database/db")

function registerPoke(pokeId, pokeName, pokeSprite, fkRegion, idShinyBox) {
    const sqlCommand = `
    INSERT INTO pokemon (idPokemon, nome, sprite, fkRegiao) VALUES (?, ?, ?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, [pokeId, pokeName, pokeSprite, fkRegion], (error, result) => {
            if (error) {
                console.error("Erro ao cadastrar:", error);
                reject(error);
            } else {
                console.log("Registro inserido na tabela pokemon");
                resolve(result);
            }
        });
    });

}

function registerPoke2(idShinyBox, idCreated) {
    const sqlCommand = `
    INSERT INTO captura (fkShinyBox, fkPokemon) VALUES (?, ?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, [idShinyBox, idCreated], (error, result) => {
            if (error) {
                console.error("Erro ao cadastrar:", error);
                reject(error);
            } else {
                console.log("Registro inserido na tabela captura");
                resolve(result);
            }
        });
    });
}

function countAllPokemon(shinyBox) {
    const sqlCommand = `
    call countAllPokemon(?);
    `;

    console.log("Executando o comando SQL: " + sqlCommand);

    return new Promise((resolve, reject) => {
        database.query(sqlCommand, [shinyBox], (error, result) => {
            if (error) {
                console.error("Erro ao contar os Pokémon: ", error);
                reject(error);
            } else {
                console.log("Contagem dos Pokémon realizada");
                resolve(result);
            }
        });
    });
}

module.exports = { registerPoke, registerPoke2, countAllPokemon }