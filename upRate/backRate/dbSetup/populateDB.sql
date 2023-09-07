-- Inserting sample restaurants
INSERT INTO restaurants (id, name, header_image_link, logo_image_link, average_rating) VALUES
(1, 'goikoGrill', 'https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg',
    'https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png', 4.5),

(2, 'burgerKing', 'https://www.reasonwhy.es/media/library/whopper-demanda-2.jpg',
    'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-0.png', 4.7),

(3, 'mcdonalds', 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:hamburguesas-3.jpg/v1/es/restaurants/65923.jpg',
    'https://wecodeforyou.net/wp-content/uploads/2023/09/macs.png', 4.0);


-- Inserting sample questions
INSERT INTO questions (restaurant_id, question_text) VALUES 
(1, 'How do you rate the food?'),
(1, 'How do you rate the ambiance?'),
(1, 'How do you rate the Kevin bacon?'),

(2, 'How do you rate the food?'),
(2, 'How do you rate the ambiance?'),
(2, 'How do you rate the Whopper?'),

(3, 'How do you rate the food?'),
(3, 'How do you rate the ambiance?'),
(3, 'How do you rate the Big Mac?');


-- Inserting sample ratings
INSERT INTO ratings (restaurant_id, question_id, rating_value, rating_date) VALUES 
(1, 1, 5, '2023-09-01'),
(1, 2, 4, '2023-09-01'),
(1, 3, 3, '2023-09-01'),

(2, 1, 4, '2023-09-02'),
(2, 2, 5, '2023-09-02'),
(2, 3, 4, '2023-09-02');

-- Inserting sample text feedback
INSERT INTO text_feedback (restaurant_id, feedback_text, feedback_date) VALUES 
(1, 'Amazing food!', '2023-09-01'),
(2, 'Great ambiance and service', '2023-09-02');

-- Insert data for Providers
INSERT INTO Providers (provider_id, baseurl, provider_image) VALUES
(1, 'https://www.google.com/maps', 'google_maps.png'),
(2, 'https://www.tripadvisor.com', 'tripadvisor.png'),
(3, 'https://www.yelp.com', 'yelp.png'),
(4, 'https://www.zomato.com', 'zomato.png'),
(5, 'https://www.opentable.com', 'opentable.png'),
(6, 'https://www.facebook.com', 'facebook.png'),
(7, 'https://www.instagram.com', 'instagram.png'),
(8, 'https://www.thefork.com', 'thefork.png');

-- Insert data for RestaurantLinks
INSERT INTO RestaurantLinks (link_id, restaurant_id, provider_id, full_url) VALUES
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
