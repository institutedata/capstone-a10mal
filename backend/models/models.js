const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  locations: String,
  group: String,
  habitat: String,
  diet: String,
  lifespan: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = { Animal };
