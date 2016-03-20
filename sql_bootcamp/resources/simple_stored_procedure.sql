-- This script demonstrates running a couple of simple
-- Stored procedures

DROP DATABASE IF EXISTS eg_db;
CREATE DATABASE eg_db;
USE eg_db;

-- ------------------------------------------------------
-- Example one:  Split names into two tables
-- ------------------------------------------------------

CREATE TABLE early (
  name VARCHAR(50)
);

CREATE TABLE late (
  name VARCHAR(50)
);

CREATE TABLE names (
  name VARCHAR(50) PRIMARY KEY
);

INSERT INTO names VALUES
  ("Bob"), ("Carol"), ("Diana"),
  ("Michael"), ("Neil"), ("Robert"), ("Yvette");


DELIMITER //

CREATE PROCEDURE split_names ()
BEGIN
  INSERT INTO early SELECT * FROM names WHERE name <= "M";
  INSERT INTO late SELECT * FROM names WHERE name > "M";
  DELETE FROM names;
END //

DELIMITER ;

CALL split_names();

SELECT * from early;
SELECT * from late;


-- ------------------------------------------------------
-- Example two:  Get all of the heads of state from the world
-- ------------------------------------------------------

use world;

DELIMITER //
CREATE PROCEDURE country_heads (IN con CHAR(20))
BEGIN
  SELECT Name, HeadOfState FROM Country
  WHERE Continent = con;
END //
DELIMITER ;

CALL country_heads('Europe');
