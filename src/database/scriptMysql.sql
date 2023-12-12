CREATE DATABASE shinyMasters;

USE shinyMasters;

CREATE TABLE shinyBox (
idShinyBox int primary key auto_increment,
horarioCriacao datetime default current_timestamp
);

CREATE TABLE treinador (
idTreinador int auto_increment,
email varchar(45) unique,
senha varchar(45),
fkShinyBox int,
primary key (idTreinador, fkShinyBox),
constraint fkShinyBox foreign key (fkShinyBox) references shinyBox(idShinyBox)
);

CREATE TABLE regiao (
idRegiao int primary key,
nome varchar(45)
);

CREATE TABLE pokemon (
id int primary key auto_increment,
idPokemon int,
nome varchar(45),
sprite varchar(200),
fkRegiao int,
constraint fkRegiao foreign key (fkRegiao) references regiao(idRegiao)
);

CREATE TABLE captura (
fkShinyBox int,
fkPokemon int,
primary key (fkShinyBox, fkPokemon),
horarioCaptura datetime default current_timestamp,
constraint foreign key (fkShinyBox) references shinyBox(idShinyBox),
constraint foreign key (fkPokemon) references pokemon(id)
);

INSERT INTO regiao VALUES 
	(1, 'kanto'),
    (2, 'johto'),
    (3, 'hoenn'),
    (4, 'sinnoh'),
    (5, 'unova'),
    (6, 'kalos'),
    (7, 'galar');

-- select * from shinyBox;
-- select * from treinador;
-- select * from regiao;
-- select * from pokemon;
-- select * from captura;


-- select fkPokemon FROM captura where fkShinyBox = 1;
-- select count(fkPokemon) from captura where fkShinyBox=1;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=1;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=2;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=3;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=4;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=5;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=6;
-- select count(distinct(pokemon.idPokemon)) from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox=1 and pokemon.fkRegiao=7;

DELIMITER $$
CREATE PROCEDURE countAllPokemon(IN shinyBox INT)
BEGIN
	DECLARE totalPokemon INT;
    DECLARE totalRegiao1 INT;
    DECLARE totalRegiao2 INT;
    DECLARE totalRegiao3 INT;
    DECLARE totalRegiao4 INT;
    DECLARE totalRegiao5 INT;
    DECLARE totalRegiao6 INT;
    DECLARE totalRegiao7 INT;

	select count(fkPokemon) into totalPokemon from captura where fkShinyBox= shinyBox;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao1 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=1;

    select count(distinct(pokemon.idPokemon)) into totalRegiao2 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=2;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao3 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=3;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao4 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=4;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao5 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=5;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao6 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=6;
    
    select count(distinct(pokemon.idPokemon)) into totalRegiao7 from pokemon join captura on pokemon.id=captura.fkPokemon where captura.fkShinyBox= shinyBox and pokemon.fkRegiao=7;

    SELECT totalPokemon, totalRegiao1, totalRegiao2, totalRegiao3, totalRegiao4, totalRegiao5, totalRegiao6, totalRegiao7;
END $$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE deleteUser(in boxUser int)
BEGIN 
	CREATE TABLE capturados (
        id int primary key auto_increment,
        fkPokemon INT
    );
    
    INSERT INTO capturados (fkPokemon) SELECT fkPokemon FROM captura WHERE fkShinyBox = boxUser;
    
	DELETE FROM treinador WHERE fkShinyBox = boxUser;
	
    DELETE FROM captura WHERE fkShinyBox = boxUser;
    
    DELETE FROM pokemon WHERE id IN (SELECT fkPokemon FROM capturados);
    
    DELETE FROM shinyBox WHERE idShinyBox = boxUser;
    
    DROP TABLE capturados;
END $$
DELIMITER ;

-- CALL deleteUser(7);
-- CALL countAllPokemon(1);
