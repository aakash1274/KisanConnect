const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

// Location-based equipment search API
router.get('/search', async (req, res) => {
    try {
        const { category, location, duration } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }

        if (location) {
            query.availableLocations = { $regex: new RegExp(location, 'i') }; // Case-insensitive location match
        }

        if (duration) {
            query.rentalDurations = duration;
        }

        const equipmentItems = await Equipment.find(query);
        res.json(equipmentItems);
    } catch (error) {
        console.error('Error fetching equipment:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
