DROP DATABASE IF EXISTS articlesdb;

CREATE DATABASE articlesdb;

USE articlesdb;

CREATE TABLE articles(
	id BINARY(16) PRIMARY KEY DEFAULT(UUID_TO_BIN(UUID())),
    autor VARCHAR(50) NOT NULL,
    date DATE DEFAULT(now()),
	content TEXT NOT NULL
);

CREATE TABLE category(
	category_id INT AUTO_INCREMENT,
    name_category VARCHAR(50) UNIQUE NOT NULL
);
