const express = require('express');
const router = express.Router();

const { fetchAnimals } = require('../controllers/controllers');

// Route to fetch animals from the API and store them in the database
router.get('/fetch-animals', fetchAnimals);

// Route to get all animals from the database
// router.get('/animals', getAnimals);

// // Route to save a favorite animal for a user
// router.post('/save-favorite-animal', saveFavoriteAnimal);

module.exports = router;
