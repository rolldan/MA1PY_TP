create table if not exists brukere (
  id text primary key,
  brukernavn text not null unique,
  navn text not null,
  passord_hash text not null,
  rolle text not null check (rolle in ('admin', 'elev')),
  aktiv boolean not null default true,
  opprettet timestamptz not null default now()
);

create table if not exists sesjoner (
  id_hash text primary key,
  bruker_id text not null references brukere (id) on delete cascade,
  utloper timestamptz not null,
  opprettet timestamptz not null default now()
);

create index if not exists sesjoner_bruker on sesjoner (bruker_id);

create table if not exists puls (
  bruker_id text primary key references brukere (id) on delete cascade,
  sti text not null,
  tittel text not null,
  sett timestamptz not null default now()
);

create table if not exists framdrift (
  bruker_id text primary key references brukere (id) on delete cascade,
  data jsonb not null,
  oppdatert timestamptz not null default now()
);

create table if not exists innlogging_forsok (
  id bigint generated always as identity primary key,
  nokkel text not null,
  tidspunkt timestamptz not null default now()
);

create index if not exists innlogging_forsok_oppslag on innlogging_forsok (nokkel, tidspunkt);
