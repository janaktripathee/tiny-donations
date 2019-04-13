DROP DATABASE IF EXISTS tiny_donations_db;

CREATE DATABASE tiny_donations_db;

USE tiny_donations_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT, 
    name VARCHAR(255),
    PRIMARY KEY(id)
);

