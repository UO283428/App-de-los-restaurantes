const express = require('express');
const router = express.Router();
const imagesRepository = require('../../repositories/imagesRepository');

// Your default URLs
const frontPageImageURL = 'https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg';
const logoImageURL = 'https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png';

router.get('/api/front-page-image', async (req, res) => {
    const { id } = req.query;
    const url = await imagesRepository.getFrontPageImageById(id);// || frontPageImageURL;
    res.send({ url });
});

router.get('/api/logo-image', async (req, res) => {
    const { id } = req.query;
    const url = await imagesRepository.getLogoImageById(id);// || logoImageURL;
    res.send({ url });
});

module.exports = router;