BEGIN TRANSACTION;

CREATE TABLE users
(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries bigint DEFAULT 0,
    age int DEFAULT 0,
    pet VARCHAR(100),
    joined timestamp NOT NULL
);
COMMIT; 
 