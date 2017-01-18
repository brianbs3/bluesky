CREATE TABLE `members` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_unique_members` (`first_name`,`last_name`,`role`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;


CREATE TABLE `song_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(255) DEFAULT NULL,
  `song_name` varchar(255) NOT NULL,
  `key` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_unique_song_list` (`artist`,`song_name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;



CREATE TABLE `shows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `venue` varchar(255) DEFAULT NULL,
  `ts` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_unique_shows` (`venue`,`ts`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

