const startButton = document.getElementById('start-button');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
let isListening = false;

recognition.continuous = false; // Changed to false to prevent loops
recognition.interimResults = false;

recognition.onstart = () => {
    startButton.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    isListening = true;
};

recognition.onend = () => {
    startButton.innerHTML = '<i class="fas fa-microphone"></i>';
    isListening = false;
};

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('Command:', command);
    handleCommand(command);
};

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.onend = () => {
        // Start listening again after speaking
        recognition.start();
    };
    window.speechSynthesis.speak(speech);
}

function handleCommand(command) {
    if (command.includes('about')) {
        speak('Opening about page');
        window.location.href = 'about.html';
    } 
    else if (command.includes('contact')) {
        speak('Opening contact page');
        window.location.href = 'contact.html';
    }
    else if (command.includes('home')) {
        speak('Going to home page');
        window.location.href = 'index.html';
    }
    else if (command.includes('weather')) {
        const city = config.DEFAULT_CITY;
        const weather = config.WEATHER_DATA[city];
        speak(`Current temperature in ${city} is ${weather.temp} degrees Celsius and it's ${weather.description}`);
    }
    else if (command.includes('price') || command.includes('rate')) {
        const prices = config.CROP_PRICES;
        const crops = Object.keys(prices);
        speak(`Current prices: ${crops.map(crop => `${crop} at ${prices[crop]}`).join(', ')}`);
    }
    else if (command.includes('news')) {
        speak(config.AGRICULTURE_NEWS[0]);
    }
    else if (command.includes('help')) {
        speak('You can ask about weather, prices, news, or say open followed by page name');
    }
    else {
        speak('Sorry, I did not understand. Try saying help for available commands');
    }
}

startButton.addEventListener('click', () => {
    if (!isListening) {
        recognition.start();
        speak('Hello, how can I help you?');
    } else {
        recognition.stop();
        speak('Goodbye');
    }
});

// Voice Assistant functionality
const setupVoiceAssistant = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const startButton = document.getElementById('start-button');

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        console.log('Voice recognition active');
        startButton.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    };

    recognition.onend = function() {
        console.log('Voice recognition ended');
        startButton.innerHTML = '<i class="fas fa-microphone"></i>';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[event.resultIndex][0].transcript.toLowerCase();
        console.log('You said:', transcript);
        handleVoiceCommand(transcript);
    };

    function handleVoiceCommand(command) {
        // Navigation commands
        if (command.includes('go to home') || command.includes('open home')) {
            navigate('index.html');
        } else if (command.includes('about') || command.includes('about us')) {
            navigate('about.html');
        } else if (command.includes('contact') || command.includes('support')) {
            navigate('contact.html');
        } else if (command.includes('register') || command.includes('sign up')) {
            navigate('register.html');
        } else if (command.includes('login')) {
            navigate('login.html');
        } else if (command.includes('buyer dashboard')) {
            navigate('buyerDashboard.html');
        } else if (command.includes('farmer dashboard')) {
            navigate('farmerDashboard.html');
        } else if (command.includes('equipment')) {
            navigate('equipment.html');
        } else if (command.includes('market trends')) {
            navigate('market-trends.html');
        } else if (command.includes('weather')) {
            navigate('weather-updates.html');
        }
        // Product category commands
        else if (command.includes('fruits')) {
            navigate('organic-fruits.html');
        } else if (command.includes('vegetables')) {
            navigate('fresh-vegetables.html');
        } else if (command.includes('dairy')) {
            navigate('dairy-products.html');
        } else if (command.includes('poultry')) {
            navigate('poultry-products.html');
        }
        // Search functionality
        else if (command.includes('search for')) {
            const searchTerm = command.replace('search for', '').trim();
            const searchInput = document.getElementById('searchBar');
            if (searchInput) {
                searchInput.value = searchTerm;
                searchInput.dispatchEvent(new Event('input'));
            }
        }
    }

    function navigate(page) {
        speak(`Navigating to ${page.replace('.html', '')}`);
        window.location.href = page;
    }

    function speak(text) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }

    startButton.addEventListener('click', () => {
        if (recognition) {
            recognition.start();
        }
    });
};

// Initialize voice assistant when document is ready
document.addEventListener('DOMContentLoaded', setupVoiceAssistant);
