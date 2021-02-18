CREATE DATABASE IF NOT EXISTS crud;

use crud;


CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
)


INSERT INTO `clientes` VALUES (10,'ADMINISTRATOR',99,'PR');

