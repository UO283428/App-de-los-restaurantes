const express = require('express');
const router = express.Router();
const imagesRepository = require('../../repositories/imageRepository');

// Your default URLs
//const frontPageImageURL = 'https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg';
//const logoImageURL = 'https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png';

router.get('/api/front-page-image', async (req, res) => {
    const { id: restaurant_id } = req.query;
    const frontPageImageUrl = await imagesRepository.getFrontPageImageByRestaurantName(restaurant_id);// || frontPageImageURL;
    res.send({ frontPageImageUrl });
});

router.get('/api/logo-image', async (req, res) => {
    const { id: restaurant_id } = req.query;
    const logoImageUrl = await imagesRepository.getLogoImageByRestaurantName(restaurant_id);// || logoImageURL;
    res.send({ logoImageUrl });
});

module.exports = router;