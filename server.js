const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the about.html file for the about route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Serve the plans.html file for the plans route
app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'plans.html'));
});

// Serve the location.html file for the location route
app.get('/location', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'location.html'));
});

// Serve the donate.html file for the donate route
app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'donate.html'));
});

// Serve the contact.html file for the contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
