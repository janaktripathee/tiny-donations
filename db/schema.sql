DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	-- email VARCHAR(255) NOT NULL UNIQUE,
	-- password_hash VARCHAR(255) NOT NULL,
	-- role INT NOT NULL,
	name VARCHAR(255),
	street VARCHAR(255),
	city VARCHAR(255),
	state  VARCHAR(255),
	zip INT,
	hours VARCHAR(225),
	days  VARCHAR(225),
	instructions VARCHAR(255),
	lat DECIMAL(10, 8),
	lng DECIMAL(10, 8),
	PRIMARY KEY (id)
);