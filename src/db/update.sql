alter table profiles add column subscription_level subscription_level;
update profiles set subscription_level = 'free';