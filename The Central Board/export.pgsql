--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: banned; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE banned (
    user_id integer,
    board_id integer
);


ALTER TABLE public.banned OWNER TO postgres;

--
-- Name: boards; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE boards (
    board_id integer NOT NULL,
    name character varying(100),
    type integer
);


ALTER TABLE public.boards OWNER TO postgres;

--
-- Name: boards_board_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE boards_board_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.boards_board_id_seq OWNER TO postgres;

--
-- Name: boards_board_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE boards_board_id_seq OWNED BY boards.board_id;


--
-- Name: clips; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE clips (
    post_id integer,
    board_id integer
);


ALTER TABLE public.clips OWNER TO postgres;

--
-- Name: flair; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE flair (
    flair character varying(50),
    user_id integer,
    board_id integer
);


ALTER TABLE public.flair OWNER TO postgres;

--
-- Name: moderators; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE moderators (
    user_id integer,
    board_id integer
);


ALTER TABLE public.moderators OWNER TO postgres;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE posts (
    post_id integer,
    text character varying(2000),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    votes integer,
    user_id integer,
    board_id integer,
    tag1 character varying(30),
    tag2 character varying(30),
    tag3 character varying(30)
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE users (
    email character varying(254),
    pass character varying(30),
    user_id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: board_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY boards ALTER COLUMN board_id SET DEFAULT nextval('boards_board_id_seq'::regclass);


--
-- Data for Name: banned; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY banned (user_id, board_id) FROM stdin;
\.


--
-- Data for Name: boards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY boards (board_id, name, type) FROM stdin;
\.


--
-- Name: boards_board_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('boards_board_id_seq', 1, false);


--
-- Data for Name: clips; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY clips (post_id, board_id) FROM stdin;
\.


--
-- Data for Name: flair; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY flair (flair, user_id, board_id) FROM stdin;
\.


--
-- Data for Name: moderators; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY moderators (user_id, board_id) FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY posts (post_id, text, created_at, votes, user_id, board_id, tag1, tag2, tag3) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (email, pass, user_id) FROM stdin;
\.


--
-- Name: boards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY boards
    ADD CONSTRAINT boards_pkey PRIMARY KEY (board_id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

