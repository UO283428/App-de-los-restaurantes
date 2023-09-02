-- Inserting sample restaurants
INSERT INTO restaurants (name, header_image_link, logo_image_link) VALUES
('goikoGrill', 'https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg',
    'https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png'),
('burgerKing', 'https://www.reasonwhy.es/media/library/whopper-demanda-2.jpg',
    'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-0.png'),
('mcdonalds', 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:hamburguesas-3.jpg/v1/es/restaurants/65923.jpg',
    'https://wecodeforyou.net/wp-content/uploads/2023/09/macs.png');


-- Inserting sample questions
INSERT INTO questions (question_text) VALUES 
('How do you rate the food?'),
('How do you rate the ambiance?'),
('How do you rate the service?');

-- Inserting sample ratings
INSERT INTO ratings (restaurant_id, question_id, rating_value, rating_date) VALUES 
(1, 1, 5, '2023-09-01'),
(1, 2, 4, '2023-09-02'),
(1, 3, 3, '2023-09-03'),
(2, 1, 4, '2023-09-01'),
(2, 2, 5, '2023-09-02'),
(2, 3, 4, '2023-09-03');

-- Inserting sample text feedback
INSERT INTO text_feedback (restaurant_id, feedback_text, feedback_date) VALUES 
(1, 'Amazing food!', '2023-09-01'),
(2, 'Great ambiance and service', '2023-09-02');
