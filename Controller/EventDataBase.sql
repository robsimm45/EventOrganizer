create table Users( userId int not null,  firstName varchar(255) not null, lastName varchar(255) not null, primary key (userId));

create table Events( eventId int not null, eventDate date not null, eventTime time not null, location varchar(255) not null, organizer int not null, primary key (eventId));

create table RSVP(eventID int not null, userId int not null);

Insert into Users( userId, firstName, lastName) values (1, "Organizer", "Jones");

Insert into Users( userId, firstName, lastName) values (2, "Alicia", "Santiago");

Select * from Users;