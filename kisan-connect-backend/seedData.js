const mongoose = require('mongoose');
const Equipment = require('./models/Equipment');

mongoose.connect('mongodb+srv://aakasheti4555:Aakash@1274@cluster0.mongodb.net/kisanConnect?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const sampleEquipment = [
    {
        name: "Tractor",
        category: "tractors",
        description: "Powerful machine for farming",
        imageUrl: "tractor.jpg",
        price: 11000,
        availableLocations: ["Maharashtra", "Punjab", "Haryana"],
        rentalDurations: ["daily", "weekly"]
    },
    {
        name: "Harvester",
        category: "harvesters",
        description: "High efficiency crop harvester",
        imageUrl: "harvester.jpg",
        price: 37500,
        availableLocations: ["Uttar Pradesh", "Rajasthan", "Gujarat"],
        rentalDurations: ["weekly", "seasonal"]
    }
];

Equipment.insertMany(sampleEquipment)
    .then(() => {
        console.log("✅ Sample Equipment Data Inserted");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ Error inserting sample data:", err));
