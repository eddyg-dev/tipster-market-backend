-- Drop existing tables and types
drop table if exists tip_purchases cascade;
drop table if exists followers cascade;
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
create type odd_type as enum ('h2h', 'spreads');

-- Create enum for tip status
create type tip_status as enum ('on_sale', 'closed', 'completed', 'cancelled');

-- Create enum for tip result
create type tip_result as enum ('pending', 'won', 'lost', 'void');

-- Create enum for profile type
create type profile_type as enum ('tipster', 'user');

-- Create unified profiles table
create table profiles (
  id uuid primary key,
  username text not null,
  birth_date date,
  profile_type profile_type not null,
  accept_terms boolean default false,
  profile_introduction_completed boolean default false,
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

-- Create tips table (now references profiles instead of tipsters)
create table tips (
  id uuid default uuid_generate_v4() primary key,
  tipster_id uuid references profiles(id) on delete cascade not null,
  selected_outcomes jsonb not null,
  amount numeric not null,
  price numeric not null,
  analysis text,
  sale_deadline timestamp with time zone not null,
  status tip_status default 'on_sale' not null,
  result tip_result default 'pending' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create tip_purchases table
create table tip_purchases (
  id uuid default uuid_generate_v4() primary key,
  tip_id uuid references tips(id) on delete cascade not null,
  buyer_id uuid references profiles(id) on delete cascade not null,
  status text default 'completed' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create followers table
create table followers (
  id uuid default uuid_generate_v4() primary key,
  follower_id uuid references profiles(id) on delete cascade not null,
  tipster_id uuid references profiles(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Contrainte unique pour éviter les doublons
  unique(follower_id, tipster_id)
);

-- Create indexes
create index idx_matches_date on matches(date);
create index idx_matches_sport_key on matches(sport_key);
create index idx_odds_match_id on odds(match_id);
create index idx_tips_tipster_id on tips(tipster_id);
create index idx_profiles_username on profiles(username);
create index idx_profiles_type on profiles(profile_type);
create index idx_tip_purchases_tip_id on tip_purchases(tip_id);
create index idx_tip_purchases_buyer_id on tip_purchases(buyer_id);
create index idx_followers_follower_id on followers(follower_id);
create index idx_followers_tipster_id on followers(tipster_id);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column();

-- Insert sample data for Ligue 1
insert into matches (home_team, away_team, date, sport_key) values
  ('PSG', 'OM', now(), 'soccer_france_ligue_one'),
  ('Lyon', 'Monaco', now() + interval '1 day', 'soccer_france_ligue_one');

-- Insert sample odds for PSG vs OM
insert into odds (match_id, libelle, value, type) values
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'PSG', 1.5, 'h2h'),
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'Nul', 3.0, 'h2h'),
  ((select id from matches where home_team = 'PSG' and away_team = 'OM'), 'OM', 2.0, 'h2h');

-- Insert sample odds for Lyon vs Monaco
insert into odds (match_id, libelle, value, type) values
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Lyon', 2.1, 'h2h'),
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Nul', 3.2, 'h2h'),
  ((select id from matches where home_team = 'Lyon' and away_team = 'Monaco'), 'Monaco', 1.8, 'h2h');

-- Créer le trigger pour les nouveaux utilisateurs (insère dans profiles par défaut)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    username,
    profile_type
  )
  VALUES (
    new.id,
    split_part(new.email, '@', 1),
    'user'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Supprimer l'ancien trigger s'il existe
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Créer le nouveau trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

