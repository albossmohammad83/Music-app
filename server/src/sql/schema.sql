CREATE TABLE songs (
	id int NOT NULL,
	aid int,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	FOREIGN KEY(aid) REFERENCES albums(aid),
	PRIMARY KEY(id)
);

CREATE TABLE albums (
	aid int NOT NULL PRIMARY KEY,
	id int,
	album_title text NOT NULL,
	artist text NOT NULL,
	FOREIGN KEY(id) REFERENCES songs(id)
);


INSERT INTO songs (id, aid, song_title, notes) 
VALUES (1, 10, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4'),
	   (2, 11,  'Meow', 'A3 B3 C4 A3 C4 C4 B3 A3 B3 E3'),
	   (3, 12, 'shakalans', 'B3 C4 D4 B3 D4 D4 C4 B3 A3'),
	   (4, 13, 'hasoneh', 'E4 A4 G4 A4 G4 F4 E4 D4 E4 A4');

INSERT INTO albums (aid, id, album_title, artist) 
VALUES (10, 1, 'Album1', 'Elmalik'),
	   (11, 2,  'Album2', 'habagbag'),
	   (12, 3, 'Album3', 'zalmati'),
	   (13, 4, 'Album4', 'wa7sh');	   