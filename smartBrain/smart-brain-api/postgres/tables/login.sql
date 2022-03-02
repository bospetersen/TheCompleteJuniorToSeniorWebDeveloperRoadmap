BEGIN TRANSACTION;

CREATE TABLE login
(
    id serial PRIMARY KEY NOT NULL,
    email text UNIQUE NOT NULL,
    hash varchar(100) NOT NULL,
    joined timestamp NOT NULL
);

COMMIT;