DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	role INT NOT NULL,
	name VARCHAR(255) NOT NULL,
	street VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	state  VARCHAR(255) NOT NULL,
	zip INT NOT NULL,
	country VARCHAR(255) NOT NULL,
	hours VARCHAR(225) NOT NULL,
	days  VARCHAR(225) NOT NULL,
	directions VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

/* FOREIGN KEY (acceptable_donations_id) REFERENCES acceptable_donations(id),
FOREIGN KEY (donations_id) REFERENCES  donations(id) */


CREATE TABLE acceptable_donations(
	id INT NOT NULL AUTO_INCREMENT,
	type VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	PRIMARY KEY (id)
);

CREATE TABLE donations(
	id INT NOT NULL AUTO_INCREMENT,
	date DATETIME NOT NULL,
	type VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	PRIMARY KEY (id)
);

