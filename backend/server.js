require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Added CORS middleware
const animalRoutes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from http://localhost:3000

const mongoURI = 'mongodb://localhost:27017/animalDatabase';

mongoose.connect(process.env.MONGODB_URI || mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('\x1b[33m%s\x1b[0m', 'Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', animalRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
