const axios = require('axios');
const Animal = require('../models/models');
require('dotenv').config();

const fetchAnimals = async (req, res) => {
  const animalsList = [
    'Spider Monkey',
    'Golden Lion Tamarin',
    'Squirrel Monkey',
    'Tarantula',
    // 'Cotton Top Tamarin',
    // 'Green Iguana',
    'Alligator',
    'Emperor Tamarin',
    // 'Galàpagos Tortoise',
  ];

  let savedAnimals = [];
  let errors = [];

  for (const name of animalsList) {
    try {
      const response = await axios.get(`${process.env.API_URL}${encodeURIComponent(name)}`, {
        headers: { 'X-Api-Key': process.env.API_KEY }
      });


      // Check if the response has data
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        const animalData = response.data[0];

        // Create a new document for each animal
        const { locations, characteristics } = animalData;
        const newAnimal = new Animal({
          name: animalData.name,
          location: locations.join(', '),
          main_prey: characteristics.prey,
          habitat: characteristics.habitat,
          predators: characteristics.predators,
          diet: characteristics.diet,
          favorite_food: characteristics.favorite_food,
          type: characteristics.group,
          slogan: characteristics.slogan,
          lifespan: characteristics.lifespan,
          weight: characteristics.weight,
          top_speed: characteristics.top_speed,
        });
        await newAnimal.save(); // Save the document to MongoDB
        savedAnimals.push(newAnimal);
      } else {
        errors.push({ animal: name, error: 'No data found for animal' });
      }
    } catch (error) {
      console.error(`Error fetching data for ${name}:`, error);
      errors.push({ animal: name, error: error.message });
    }
  }

  if (errors.length > 0) {
    return res.status(500).json({ success: false, message: 'Failed to fetch data for some animals', errors });
  }

  res.status(200).json({ success: true, message: 'Animals data fetched and stored successfully', animals: savedAnimals });
};

module.exports = { fetchAnimals };
