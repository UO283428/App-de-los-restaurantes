-- Inserting sample restaurants
INSERT INTO restaurants (restaurant_id, restaurant_name, header_image_link, logo_image_link, average_rating, number_of_ratings) VALUES
(1, 'goikoGrill', 'https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg',
    'https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png', 4, 1),

(2, 'burgerKing', 'https://www.reasonwhy.es/media/library/whopper-demanda-2.jpg',
    'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-0.png', 4, 3),

(3, 'mcdonalds', 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:hamburguesas-3.jpg/v1/es/restaurants/65923.jpg',
    'https://wecodeforyou.net/wp-content/uploads/2023/09/macs.png', 4.67, 3);


-- Inserting sample questions
INSERT INTO questions (restaurant_id, question_text, average_rating, number_of_ratings) VALUES 
(1, 'How do you rate the food?', 5, 1),
(1, 'How do you rate the ambiance?', 4, 1),
(1, 'How do you rate the Kevin bacon?', 3, 1),

(2, 'How do you rate the food?', 4, 1),
(2, 'How do you rate the ambiance?', 5, 1),
(2, 'How do you rate the Whopper?', 4, 1),

(3, 'How do you rate the food?', 0, 0),
(3, 'How do you rate the ambiance?', 0, 0),
(3, 'How do you rate the Big Mac?', 0, 0);


-- Inserting sample ratings
INSERT INTO question_ratings (question_id, rating_value, rating_date) VALUES 
(1, 5, '2023-09-01'),
(2, 4, '2023-09-01'),
(3, 3, '2023-09-01'),

(1, 4, '2023-09-02'),
(2, 5, '2023-09-02'),
(3, 4, '2023-09-02');

-- Inserting sample ratings
INSERT INTO general_ratings (restaurant_id, rating_value, rating_date) VALUES 
(1, 5, '2023-09-01'),

(2, 5, '2023-09-01'),
(2, 4, '2023-09-02'),
(2, 3, '2023-09-03'),

(3, 4, '2023-09-04'),
(3, 5, '2023-09-05'),
(3, 4, '2023-09-06');

-- Inserting sample text feedback
INSERT INTO text_feedback (restaurant_id, feedback_text, feedback_date) VALUES 
(1, 'Amazing food!', '2023-09-01'),
(2, 'Great ambiance and service', '2023-09-02');

-- Insert data for Providers
INSERT INTO providers (provider_id, provider_image) VALUES
(1, 'https://logos-world.net/wp-content/uploads/2022/01/Google-Maps-Logo.png'),
(2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TripAdvisor_Logo.svg/2560px-TripAdvisor_Logo.svg.png'),
(3, 'yelp.png'),
(4, 'zomato.png'),
(5, 'opentable.png'),
(6, 'facebook.png'),
(7, 'instagram.png'),
(8, 'thefork.png');

-- Insert data for RestaurantLinks
INSERT INTO restaurantLinks (link_id, restaurant_id, provider_id, full_url) VALUES
-- Links for Restaurant 1
(1, 1, 1, 'https://www.google.com/maps/delicious_delights'),
(2, 1, 2, 'https://www.tripadvisor.com/delicious_delights'),
(3, 1, 3, 'https://www.yelp.com/delicious_delights'),
-- Links for Restaurant 2
(19, 2, 1, 'https://www.google.com/maps/tasty_bites'),
(20, 2, 2, 'https://www.tripadvisor.com/tasty_bites'),
(21, 2, 3, 'https://www.yelp.com/tasty_bites'),
-- Links for Restaurant 3
(37, 3, 1, 'https://www.google.com/maps/cuisine_creations'),
(38, 3, 2, 'https://www.tripadvisor.com/cuisine_creations'),
(39, 3, 3, 'https://www.yelp.com/cuisine_creations');

-- Insert additional links for each restaurant and provider as needed.
