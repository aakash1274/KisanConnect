const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    imageUrl: String,
    price: Number,
    availableLocations: [String],
    rentalDurations: [String] // Example: ['daily', 'weekly', 'seasonal']
});

module.exports = mongoose.model('Equipment', equipmentSchema);
