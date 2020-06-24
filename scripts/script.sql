create table access_level
(
    id       int auto_increment
        primary key,
    name     varchar(60) null,
    priority int         null
);

create table Users
(
    id           int auto_increment
        primary key,
    first_name   varchar(256) null,
    last_name    varchar(256) null,
    email        varchar(256) null,
    password     varchar(256) null,
    description  varchar(256) null,
    access_level int          null,
    constraint Users_access_level_id_fk
        foreign key (access_level) references access_level (id)
);

