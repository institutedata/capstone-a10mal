// const express = require('express');
// const mongoose = require('mongoose');
// const animalRoute = require('./routes/routes');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/animals_animals', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send({ message: 'Welcome to Animal API'})
// });

// app.use('/animal', animalRoute)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const animalRoutes = require('./routes/routes');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('\x1b[33m%s\x1b[0m', 'Connected to MongoDB')) 
  .catch(err => console.error('Could not connect to MongoDB', err));


app.use('/api', animalRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
