USE `travel_mateDB`;

INSERT INTO Users (name, email, password, location, interests, about, activities, profilePhoto, coverPhoto, username, createdAt, updatedAt)
VALUES ("Brad Stevens","bstevens@hotmail.com","7777777","Paris, France","Sports, Outdoors, Night Scene",
"Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
"Blah blah blah",
"https://images.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.unsplash.com/photo-1495401246624-593eb4b920ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8257fb59fbb7007ed2c200404795641&auto=format&fit=crop&w=800&q=60",
"bradS",now(),now());

INSERT INTO Users (name, email, password, location, interests, about, activities, profilePhoto, coverPhoto, username, createdAt, updatedAt)
VALUES ("Simon Robben","srobben@gmail.com","666666","Austin, Texas","Fine Dining, Art & Museums, Music Events, Sight Seeing",
"Cupcake ipsum dolor sit. Amet chocolate cake tiramisu jelly beans dragée halvah tiramisu I love. Tootsie roll bear claw fruitcake chocolate I love jujubes toffee fruitcake powder. Marshmallow dessert fruitcake danish biscuit ice cream. Tiramisu lemon drops sesame snaps. Cookie cupcake muffin. Macaroon halvah oat cake caramels danish. Carrot cake halvah chocolate. Caramels danish sesame snaps sweet.",
"It's a blah blah kind of blah blah blah blah blah",
"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
"sRobben",now(),now());

INSERT INTO Users (name, email, password, hostTown, interests, aboutYou, activities, profilePhoto, coverPhoto, handle, createdAt, updatedAt)
VALUES ("","","","","","","","","","",now(),now());

INSERT INTO Users (name, email, password, hostTown, interests, aboutYou, activities, profilePhoto, coverPhoto, handle, createdAt, updatedAt)
VALUES ("","","","","","","","","","",now(),now());

INSERT INTO Users (name, email, password, hostTown, interests, aboutYou, activities, profilePhoto, coverPhoto, handle, createdAt, updatedAt)
VALUES ("","","","","","","","","","",now(),now());

INSERT INTO Users (name, email, password, hostTown, interests, aboutYou, activities, profilePhoto, coverPhoto, handle, createdAt, updatedAt)
VALUES ("","","","","","","","","","",now(),now());

INSERT INTO Users (name, email, password, hostTown, interests, aboutYou, activities, profilePhoto, coverPhoto, handle, createdAt, updatedAt)
VALUES ("","","","","","","","","","",now(),now());

SELECT * FROM Users;

ALTER TABLE Messages
ADD authorId INTEGER;

ALTER TABLE Messages
DROP COLUMN authorId;



SELECT * FROM Messages;




//https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//3Motional

//
//

//
//

//https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//Shelly Struthers

//https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
//Sam Bee

//https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//Brucie Mars

//https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//Matt Tdtgt