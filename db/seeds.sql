/*
	Make a seeds.sql file where you insert 5 actors into the actors table
*/
USE tiny_donations_db;

INSERT INTO users (email, password_hash, role, name, street, city, state, zip, country, hours, days, directions) VALUES	
("joesmith@email.com", "erofjieasfeawh", 1, "joe smith", "32 First Street", "San Francisco", "CA", "94034", "USA", "4-5pm", "m-f", "Place items in the green bin"),
("jeanie@email.com", "erosaasffdase8flewh", 1, "jeanie jones", "9387 Red Street", "Gilroy", "CA", "95454", "USA", "3-5pm", "s,s", "Black box on south wall"),
("bobsanders@email.com", "333roerwew8flewh", 1, "bob sanders", "39478 OAK road", "Willow Glen", "CA", "94034", "USA", "8-9am", "t, th", "Put on table under window"),
("ravi@email.com", "342rfawofjie8flewh", 1, "ravi bin", "1 astor place", "San Francisco", "CA", "94034", "USA", "4-5pm", "m-f", "Leave with reception"),
("susanlee@email.com", "agferfgaerflerfaersdfg", 1, "sue lee", "3987 Ashland Drive", "Oakland", "CA", "94034", "USA", "4-5pm", "sunday", "The cardboard box marked 'donations'"),
("jakejohnson@email.com", "erofjeafae", 1, "j johnson", "76 Whiskey hill LN ", "San Antonio", "TX", "97874", "USA", "9-5pm", "m, w, f", "Leave at door");


