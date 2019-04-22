DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	user_group VARCHAR(255) DEFAULT 'donor' NOT NULL,
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
    donation_type VARCHAR(255),
    user_id INT ,
    foreign key (user_id) references users(id),
    PRIMARY KEY(id)
);

CREATE TABLE donations_accepted_user_join (
    id INT NOT NULL AUTO_INCREMENT, 
    donation_id Int,
    user_id INT ,
    foreign key (donation_id) references donations_accepted (id),
    foreign key (user_id) references users(id),
    PRIMARY KEY(id)
); 


CREATE TABLE donations_made (
	id INT NOT NULL AUTO_INCREMENT,
	date DATETIME NULL,
	user_id INT,
	donation_type INT,
	donation_type_made VARCHAR(225),
	donation_value decimal(15,2) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users (id),
	FOREIGN KEY (donation_type) REFERENCES donations_accepted (id),
	PRIMARY KEY (id)
);





