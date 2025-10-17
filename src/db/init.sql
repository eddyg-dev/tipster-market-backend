-- Drop existing tables and types
drop table if exists tips cascade;
drop table if exists matches cascade;
drop table if exists profiles cascade;
drop table if exists sports cascade;
drop type if exists tip_result cascade;
drop type if exists profile_type cascade;
drop type if exists subscription_level cascade;

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create enums for tip status and profile type
create type tip_result as enum ('initial', 'won', 'lost', 'cancelled');
create type profile_type as enum ('tipster', 'user');
create type subscription_level as enum ('free', 'premium', 'tipster');

-- Create unified profiles table
create table profiles (
  id uuid primary key,
  username text not null,
  email text not null,
  birth_date date,
  profile_type profile_type not null,
  accept_terms boolean default false,
  profile_introduction_completed boolean default false,
  avatar_url text,
  subscription_level subscription_level,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create matches table
create table matches (
  id uuid default uuid_generate_v4() primary key,
  match_id text unique,
  home_team text not null,
  away_team text not null,
  commence_time timestamp with time zone not null,
  sport_key text not null,
  outcomes jsonb,
  scores jsonb,
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
  deadline timestamp with time zone not null,
  result tip_result default 'initial' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create sports table
create table sports (
  key text primary key,
  "group" text,
  title text not null,
  description text,
  flag text,
  icon text,
  active boolean default true,
  priority integer default 2,
  has_outrights boolean default false
);


-- Create foreign key constraints
alter table matches 
add constraint fk_matches_sport_key 
foreign key (sport_key) 
references sports(key) 
on delete cascade 
on update cascade;

-- Create indexes
create index idx_matches_commence_time on matches(commence_time);
create index idx_matches_sport_key on matches(sport_key);
create index idx_matches_match_id on matches(match_id);
create index idx_matches_outcomes on matches using gin(outcomes);
create index idx_tips_tipster_id on tips(tipster_id);
create index idx_profiles_username on profiles(username);
create index idx_profiles_type on profiles(profile_type);
create index idx_profiles_subscription_level on profiles(subscription_level);

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

-- Créer le trigger pour les nouveaux utilisateurs (insère dans profiles par défaut)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    username,
    email,
    profile_type
  )
  VALUES (
    new.id,
    split_part(new.email, '@', 1),
    new.email,
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

