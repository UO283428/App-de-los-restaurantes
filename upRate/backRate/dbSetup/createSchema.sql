DROP DATABASE IF EXISTS uprateDB;
DROP DATABASE IF EXISTS upRate;
CREATE DATABASE uprateDB;
USE uprateDB;

CREATE TABLE restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    header_image_link VARCHAR(1024),
    logo_image_link VARCHAR(1024)
);

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_text VARCHAR(1024) NOT NULL,
    average_rating FLOAT DEFAULT 0
);

CREATE TABLE ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    question_id INT,
    rating_value INT CHECK (rating_value >= 0 AND rating_value <= 5),
    rating_date DATE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE text_feedback (
    id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    feedback_text TEXT,
    feedback_date DATE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
