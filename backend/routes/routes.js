const express = require('express');
const { fetchAnimals, getAnimals, saveFavoriteAnimal } = require('../controllers/controllers');
const router = express.Router();

router.get('/fetch-animals', fetchAnimals);

// router.get('/animals', getAnimals);

router.post('/save-favorite-animal', saveFavoriteAnimal);

const animalRoute = router
module.exports = animalRoute;
