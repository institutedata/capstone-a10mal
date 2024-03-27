require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const animalRoutes = require('./routes/routes');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('\x1b[33m%s\x1b[0m', 'Connected to MongoDB')) 
  .catch(err => console.error('Could not connect to MongoDB', err));


app.use('/api', animalRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
