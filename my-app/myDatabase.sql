CREATE TABLE Users(
    Email varchar(25) NOT NULL UNIQUE,
    Password varchar(30) NOT NULL,
    PRIMARY KEY (Email)
);
