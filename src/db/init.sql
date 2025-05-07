-- Drop existing tables and types
drop table if exists predictions cascade;
drop table if exists odds cascade;
drop table if exists matches cascade;
drop table if exists profiles cascade;
drop type if exists prediction_result cascade;
drop type if exists prediction_status cascade;
drop type if exists odd_type cascade;

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create enum for odd types
create type odd_type as enum ('result', 'spreads');

-- Create enum for prediction status
create type prediction_status as enum ('on_sale', 'closed', 'completed', 'cancelled');

-- Create enum for prediction result
create type prediction_result as enum ('pending', 'won', 'lost', 'void');

-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
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

-- Create predictions table
create table predictions (
  id uuid default uuid_generate_v4() primary key,
  selected_outcomes jsonb not null,
  amount numeric not null,
  price numeric not null,
  sale_deadline timestamp with time zone not null,
  status prediction_status default 'on_sale' not null,
  result prediction_result default 'pending' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes
create index idx_matches_date on matches(date);
create index idx_matches_sport_key on matches(sport_key);
create index idx_odds_match_id on odds(match_id);

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

-- Create trigger for new user profiles
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.email, '');
  return new;
end;
$$ language plpgsql security definer;

-- Attach trigger to auth.users
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Create RLS policies for profiles
alter table profiles enable row level security;

create policy "Les profils sont visibles par tous"
  on profiles for select
  using (true);

create policy "Les utilisateurs peuvent mettre à jour leur propre profil"
  on profiles for update
  using (auth.uid() = id);

create policy "Les utilisateurs peuvent créer leur propre profil"
  on profiles for insert
  with check (auth.uid() = id); 