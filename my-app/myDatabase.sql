CREATE TABLE Users(
    Username varchar(20) NOT NULL UNIQUE,
    Password varchar(30) NOT NULL,
    PRIMARY KEY (Username)
);
