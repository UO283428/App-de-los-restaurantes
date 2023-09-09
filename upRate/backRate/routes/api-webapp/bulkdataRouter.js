const express = require('express');
const router = express.Router();
const bulkdataService = require('../../services/bulkdataService');

// POST route for sending bulk data
router.post('/api/bulk-data', async (req, res) => {
    try {
        const { id: restaurant_id } = req.query;
        const { bulkData } = req.body;
        await bulkdataService.saveBulkData(bulkData, restaurant_id);
        res.send('Bulk data received');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;