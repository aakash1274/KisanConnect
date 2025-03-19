const config = {
    WEATHER_DATA: {
        'Mumbai': { temp: 32, description: 'sunny' },
        'Delhi': { temp: 28, description: 'partly cloudy' },
        'Bangalore': { temp: 25, description: 'light rain' },
        'Chennai': { temp: 30, description: 'humid' }
    },
    
    AGRICULTURE_NEWS: [
        "Record crop production expected this season",
        "New farming techniques boost productivity",
        "Government announces support for organic farming",
        "Innovation in irrigation systems shows promising results",
        "Sustainable farming practices gain popularity"
    ],

    CROP_PRICES: {
        'Rice': '₹35/kg',
        'Wheat': '₹28/kg',
        'Cotton': '₹65/kg',
        'Sugarcane': '₹280/quintal',
        'Pulses': '₹95/kg'
    },

    DEFAULT_CITY: 'Mumbai',
    getUserCity: async function() { return this.DEFAULT_CITY; }
};
