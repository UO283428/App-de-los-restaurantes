const express = require('express');
const router = express.Router();
const linkService = require('../../services/linkService');

router.get('/api/restaurant-links', async (req, res) => {
  const { id: restaurant_id } = req.query;
  const linksArray = await linkService.getLinksForRestaurantId(restaurant_id);
  res.send({ linksArray });
});

module.exports = router;