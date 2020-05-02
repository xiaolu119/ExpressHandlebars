CREATE DATABASE burger;
USE burger;
CREATE table listofburgers(
   id int auto_increment,
   name_burger varchar(30),
   devoured BOOL default false,
   primary key(id));
   
   insert into listofburgers(name_burger) values("cheeseburger"),("beefburger"), ("chickenburger");
   select * from listofburgers;