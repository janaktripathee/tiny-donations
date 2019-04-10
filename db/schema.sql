DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE donors(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	FOREIGN KEY (donations_id) REFERENCES donations(id),
	PRIMARY KEY (id)
);


CREATE TABLE donation_centers(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	country VARCHAR(255) NOT NULL,
	street VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	zip INT NOT NULL,
	directions VARCHAR(255) NOT NULL,
	acceptable_donations_id,
	donations_id,
	FOREIGN KEY (acceptable_donations_id) REFERENCES acceptable_donations(id),
	FOREIGN KEY (donations_id) REFERENCES donations(id),
	PRIMARY KEY (id)
);


CREATE TABLE acceptable_donations(
	id INT NOT NULL AUTO_INCREMENT,
	type VARCHAR(255) NOT NULL UNIQUE,
	quanity INT NOT NULL,
	PRIMARY KEY (id)	
);

CREATE TABLE donations(
	date DATETIME NOT NULL,
	type VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	donors_id,
	donation_centers_id,
	FOREIGN KEY (donation_centers_id) REFERENCES donation_centers(id),
	FOREIGN KEY (donors_id) REFERENCES donors(id),
);

