const express = require('express');
const mongoose = require('mongoose');
const animalRoute = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/animals_animals', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Animal API'})
});

app.use('/animal', animalRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
