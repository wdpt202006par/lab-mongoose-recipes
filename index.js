const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data.json');

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
    createRecipe();
    insertData();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

createRecipe = () => {
  return Recipe.create({
    title: 'Sushi',
    level: 'UltraPro Chef',
    ingredients: ['Riz' , 'Saumon' , 'Sel' , 'Avocat' , 'Algue'],
    cuisine: 'Japonais',
    dishType: "main_course",
    duration: 30 ,
    creator: 'Marwa'
  })
  .then((recipe)=> {
      console.log(recipe.title)
  }).catch((error) => {console.error('Error connecting to the database', error);})
}

insertData = (data) => {
  return Recipe.insertMany(data).then ((recipes)=> {
    recipes.forEach(recipe => {
      console.log(recipe.title)
    });
  }).catch((error) => {console.error('Error connecting to the database', error);})
} 