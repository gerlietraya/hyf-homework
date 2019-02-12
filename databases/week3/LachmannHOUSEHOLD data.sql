CREATE TABLE Lachmann_Household_Member(
ID INT(11) ,
name TEXT,
age INT(11),
role TEXT,
PRIMARY KEY (ID)
);

CREATE TABLE hobby(
ID INT PRIMARY KEY,
Sport TEXT
);

SELECT * FROM hobby;


CREATE TABLE favourite_food(
ID INT PRIMARY KEY,
food  TEXT);

CREATE TABLE behaviour(
ID INT PRIMARY KEY,
behaviour TEXT);
SHOW TABLES;

SELECT * FROM task;