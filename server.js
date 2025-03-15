const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User'); // Import User model
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kisanconnect', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body; // Corrected variable declarations
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.post('/api/products', async (req, res) => {
    const { name, description, price, category } = req.body;
    const newProduct = new Product({ name, description, price, category });
    await newProduct.save();
    res.status(201).send('Product added successfully');
});

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.send('Product deleted successfully');
});
