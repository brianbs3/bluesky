CREATE TABLE `members` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_unique_members` (`first_name`,`last_name`,`role`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;


CREATE TABLE `bluesky`.`song_list` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `artist` VARCHAR(255) NULL COMMENT '',
  `song_name` VARCHAR(255) NOT NULL COMMENT '',
  `key` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;

CREATE TABLE `bluesky`.`shows` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `venue` VARCHAR(255) NULL COMMENT '',
  `ts` TIMESTAMP NULL DEFAULT now() COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8
  COLLATE = utf8_general_ci;
