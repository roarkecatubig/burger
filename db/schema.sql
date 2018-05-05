-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  PRIMARY KEY(id)
);

