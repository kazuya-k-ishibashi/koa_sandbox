create table user_accounts (
    id integer primary key autoincrement
    ,code text unique not null
    ,roll_id integer not null
);

