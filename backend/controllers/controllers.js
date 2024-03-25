const axios = require('axios');
const { Animal, User } = require('../models/models.js');
require('dotenv').config()

const fetchAnimals = async (req, res) => {
  const name = 'lion'
  try {
    const options = {
      method: 'GET',
      url:  process.env.API_URL + name,
      headers: {
        'X-Api-Key': process.env.API_KEY
      }
    };

    const response = await axios.request(options)

    const animals = response.data;

    // Save animals to MongoDB
    // await Animal.insertMany(animals);
    console.log('Animals saved successfully');
    res.status(200).json({ success: true, message: 'API fetched', animals})
  } catch (error) {
    console.error('Error fetching animals:', error.message);
  }
};

const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveFavoriteAnimal = async (req, res) => {
  const { userId, animalId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.favoriteAnimals.push(animalId);
    await user.save();
    res.json(user.favoriteAnimals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fetchAnimals, getAnimals, saveFavoriteAnimal };
