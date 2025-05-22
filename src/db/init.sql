-- Drop existing tables and types
drop table if exists tips cascade;
drop table if exists odds cascade;
drop table if exists matches cascade;
drop table if exists tipsters cascade;
drop table if exists users cascade;
drop type if exists tip_result cascade;
drop type if exists tip_status cascade;
drop type if exists odd_type cascade;
drop type if exists profile_type cascade;

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create enum for odd types
create type odd_type as enum ('result', 'spreads');

-- Create enum for tip status
create type tip_status as enum ('on_sale', 'closed', 'completed', 'cancelled');

-- Create enum for tip result
create type tip_result as enum ('pending', 'won', 'lost', 'void');

-- Create enum for profile type
create type profile_type as enum ('tipster', 'user');

-- Create users table (temporarily without auth.users reference)
create table users (
  id uuid primary key,
  username text not null,
  birth_date date not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  favorite_tipsters uuid[] default array[]::uuid[],
  purchase_history uuid[] default array[]::uuid[]
);

-- Create tipsters table (temporarily without auth.users reference)
create table tipsters (
  id uuid primary key,
  username text not null,
  birth_date date not null,
  accept_terms boolean default false not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  profile_introduction_completed boolean default false not null,
  win_rate numeric default 0,
  roi numeric default 0,
  rank integer default 0,
  followers_count integer default 0,
  tips_count integer default 0,
  active_tips_count integer default 0,
  status text default 'active'
);

-- Create matches table
create table matches (
  id uuid default uuid_generate_v4() primary key,
  home_team text not null,
  away_team text not null,
  date timestamp with time zone not null,
  sport_key text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create odds table
create table odds (
  id uuid default uuid_generate_v4() primary key,
  match_id uuid references matches(id) on delete cascade not null,
  libelle text not null,
  value numeric not null,
  type odd_type not null,
  selected boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create tips table
create table tips (
  id uuid default uuid_generate_v4() primary key,
  tipster_id uuid references tipsters(id) on delete cascade not null,
  selected_outcomes jsonb not null,
  amount numeric not null,
  price numeric not null,
  sale_deadline timestamp with time zone not null,
  status tip_status default 'on_sale' not null,
  result tip_result default 'pending' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes
create index idx_matches_date on matches(date);
create index idx_matches_sport_key on matches(sport_key);
create index idx_odds_match_id on odds(match_id);
create index idx_tips_tipster_id on tips(tipster_id);
create index idx_tipsters_rank on tipsters(rank);
create index idx_users_username on users(username);
create index idx_tipsters_username on tipsters(username);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger update_users_updated_at
  before update on users
  for each row
  execute function update_updated_at_column();

create trigger update_tipsters_updated_at
  before update on tipsters
  for each row
  execute function update_updated_at_column();

-- Insert sample data for Ligue 1
insert into matches (home_team, away_team, date, sport_key) values
  ('PSG', 'OM', now(), 'soccer_france_ligue_one'),
  ('Lyon', 'Monaco', now() + interval '1 day', 'soccer_france_ligue_one');

-- Insert sample odds for PSG vs OM
insert into odds (match_id, libelle, value, type) values
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'PSG', 1.5, 'result'),
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'Nul', 3.0, 'result'),
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'OM', 2.0, 'result');

-- Insert sample odds for Lyon vs Monaco
insert into odds (match_id, libelle, value, type) values
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Lyon', 2.1, 'result'),
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Nul', 3.2, 'result'),
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Monaco', 1.8, 'result');

-- Insert sample users
insert into users (
  id,
  username,
  birth_date,
  avatar_url
) values
  (
    '00000000-0000-0000-0000-000000000001',
    'ProTipster',
    '1990-01-01',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=ProTipster'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    'BetMaster',
    '1988-05-15',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=BetMaster'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'SoccerGuru',
    '1992-11-30',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=SoccerGuru'
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    'Ligue1Expert',
    '1985-07-22',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Ligue1Expert'
  ),
  (
    '00000000-0000-0000-0000-000000000005',
    'FootPredict',
    '1995-03-18',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=FootPredict'
  );

-- Insert sample tipsters
insert into tipsters (
  id,
  username,
  birth_date,
  accept_terms,
  avatar_url,
  profile_introduction_completed,
  win_rate,
  roi,
  rank,
  followers_count,
  tips_count,
  active_tips_count,
  status
) values
  (
    '00000000-0000-0000-0000-000000000001',
    'ProTipster',
    '1990-01-01',
    true,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=ProTipster',
    true,
    75.5,
    12.3,
    1,
    1250,
    156,
    5,
    'active'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    'BetMaster',
    '1988-05-15',
    true,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=BetMaster',
    true,
    68.2,
    8.7,
    2,
    980,
    203,
    8,
    'active'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'SoccerGuru',
    '1992-11-30',
    true,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=SoccerGuru',
    true,
    72.1,
    10.5,
    3,
    750,
    145,
    3,
    'active'
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    'Ligue1Expert',
    '1985-07-22',
    true,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Ligue1Expert',
    true,
    65.8,
    7.2,
    4,
    620,
    178,
    6,
    'active'
  ),
  (
    '00000000-0000-0000-0000-000000000005',
    'FootPredict',
    '1995-03-18',
    true,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=FootPredict',
    true,
    63.4,
    6.8,
    5,
    450,
    132,
    4,
    'active'
  );

