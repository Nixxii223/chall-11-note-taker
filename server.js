const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./api/notes.js');

const PORT = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON bodies
app.use(express.static('public')); // Serve static files
// app.use('/', routes); // Use the API routes

// Serve index.html and notes.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});