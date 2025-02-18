INSERT INTO events (id, category, title, description, location, date, time, petsAllowed, organizer) VALUES
(1, 'Music', 'Concert', 'A live concert', 'London', '2021-07-01', '19:00:00', FALSE, 'Live Nation'),
(2, 'Music', 'Festival', 'A music festival', 'Manchester', '2021-07-15', '12:00:00', TRUE, 'Festival Republic'),
(3, 'Music', 'Gig', 'A gig', 'Birmingham', '2021-07-30', '20:00:00', TRUE, 'Academy Music Group'),
(4, 'Sports', 'Football Match', 'A live football match', 'London', '2021-07-01', '19:00:00', FALSE, 'Premier League'),
(5, 'Music', 'Festival', 'A music festival', 'Manchester', '2021-07-15', '12:00:00', TRUE, 'Festival Republic'),
(6, 'Music', 'Gig', 'A gig', 'Birmingham', '2021-07-30', '20:00:00', TRUE, 'Academy Music Group'),
(7, 'Music', 'Concert', 'A live concert', 'LA', '2021-09-24', '19:00:00', FALSE, 'Live Nation'),
(8, 'Sports', 'Tennis', 'A live Tennis', 'Australia', '2021-10-15', '09:00:00', FALSE, 'Premier League');

INSERT INTO events (category, title, description, location, date, time, petsAllowed, organizer) 
VALUES ('Sports', 'Tennis', 'A live Tennis', 'Australia', '2021-10-15', '09:00:00', FALSE, 'Premier League');