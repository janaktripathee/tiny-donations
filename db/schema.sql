DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
<<<<<<< HEAD
	user_group VARCHAR(255) DEFAULT 'donor' NOT NULL,
=======
>>>>>>> 9e6b3c6de17cf84721e80869755d0dee3db66945
	name VARCHAR(255),
	location_name VARCHAR(255),
	street VARCHAR(255),
	city VARCHAR(255),
	state  VARCHAR(255),
	zip INT,
	hours VARCHAR(225),
	days  VARCHAR(225),
	instructions VARCHAR(255),
	lat DECIMAL(10, 8),
	lng DECIMAL(11, 8),
	PRIMARY KEY (id)
);

CREATE TABLE donations_accepted (
    id INT NOT NULL AUTO_INCREMENT, 
    dontation_type VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(id)
);