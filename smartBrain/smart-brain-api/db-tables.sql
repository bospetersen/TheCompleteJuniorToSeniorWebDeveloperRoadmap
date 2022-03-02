-- Table: public.login

-- DROP TABLE public.login;

CREATE TABLE public.login
(
    id integer NOT NULL DEFAULT nextval('login_id_seq'::regclass),
    hash character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT login_pkey PRIMARY KEY (id),
    CONSTRAINT login_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE public.login
    OWNER to postgres;


    -- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default" NOT NULL,
    entries bigint DEFAULT 0,
    joined timestamp without time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;