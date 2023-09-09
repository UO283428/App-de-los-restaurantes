DROP DATABASE IF EXISTS uprateDB;
CREATE DATABASE uprateDB;
USE uprateDB;


CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_name VARCHAR(255) NOT NULL,
    header_image_link VARCHAR(1024),
    logo_image_link VARCHAR(1024),
    average_rating FLOAT DEFAULT 0,
    number_of_ratings INT DEFAULT 0
);

CREATE TABLE questions (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    question_text VARCHAR(1024) NOT NULL,
    average_rating FLOAT DEFAULT 0,
    number_of_ratings INT DEFAULT 0,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE question_ratings (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    rating_value INT CHECK (rating_value >= 0 AND rating_value <= 5),
    rating_date DATE,
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

CREATE TABLE general_ratings (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    rating_value INT CHECK (rating_value >= 0 AND rating_value <= 5),
    rating_date DATE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE text_feedback (
    text_feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    feedback_text TEXT,
    feedback_date DATE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE providers (
    provider_id INT PRIMARY KEY,
    provider_image VARCHAR(255) DEFAULT 'https://logos-world.net/wp-content/uploads/2022/01/Google-Maps-Logo.png'
);

CREATE TABLE restaurantLinks (
    link_id INT PRIMARY KEY,
    restaurant_id INT,
    provider_id INT,
    full_url VARCHAR(255),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
    FOREIGN KEY (provider_id) REFERENCES providers(provider_id)
);