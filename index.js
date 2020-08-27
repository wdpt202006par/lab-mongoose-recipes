const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made


    Recipe.create({
        title: 'Crepes',
        level: 'Easy Peasy',
        ingredients: ['lait', 'oeufs', 'farine', 'sucre vanillé', 'rhum', 'pincée de sel'],
        cuisine: 'traditionnelle',
        dishType: 'breakfast',
        // image: ,
        duration: 15,
        creator: 'Enine & Cassandre',
        // created: ,
    })
    .then(function() { console.log(title) })
    .catch(function (err) { console.log('oops',err) })

    Recipe.save()
    .then(recipe => console.log('The recipe was created'))
    .catch(error => console.log('An error occurred', error));

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
