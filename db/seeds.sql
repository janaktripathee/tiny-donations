USE tiny_donations_db;

INSERT INTO users (name, street, city, state, zip, days, hours, instructions, lat, lng) VALUES	
("Slyvester Stalone","398473 First street","Novato","CA", 93930, "T, Th", "9-5P" ,"Leave it on the table at reception", 37.8287810797496, -122.26560568468084),
("Jon Smith","34 Stone AVE","Willmington","CA", 34342, "M-F", "4-4:30P" ,"Garbage can in corner", 37.8303872948539, -122.2757741805176),
("Garfield Cat","9 Oak ST","San Francisco","CA", 93930, "M/W/F", "3-5P" ,"Brown box", 37.82781369312049, -122.26147159247472),
("Susan Webster","932A Silver Road","San Lorenzo","CA", 93930, "M-F", "9-10AM" ,"South wall bin", 37.83565195842589, -122.27421744971349),
("Derek Bonds","88 South Park","Kirkland","CA", 93930, "Sat, Sun", "9-2PM" ,"Green box under window", 37.83109807322052, -122.26593392590405),
("Donald Sutherland","8823 Ceder CT","Sna Jose","CA", 93930, "M,T,Th", "3-5P" ,"Table labeled donations", 37.83630508457882, -122.25125687817456);

USE tiny_donations_db;

INSERT INTO donations_accepted (dontation_type, quantity) VALUES
('chalk', 41),
('books', 24),
('blankets', 3),
('canned food', 4);



