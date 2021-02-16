CREATE DATABASE IF NOT EXISTS crud;
USE crud;

CREATE TABLE IF NOT EXISTS usuarios(
    id int(11) AUTO_INCREMENT,
    nome VARCHAR(25),
	sobrenome VARCHAR(70),
    montante FLOAT(10,2),
    PRIMARY KEY (id)
);

INSERT INTO clientes (id,nome,idade, uf) VALUES(0,'Zé', 40, 'PR');