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
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  const modelA = new Recipe(
    {title:'Tarte aux pommes',
    level: 'Easy Peasy',
    ingredients: ['pate','compote', 'pommes granny', 'sucre'],
    cuisine: 'Francaise',
    dishType:'dessert',
    duration: 45,
    creator: 'Marine,Thomas',
    created:''
  })

  modelA.save()
  .then(function(recipe) {
    console.log (recipe.title)
  })
  .catch (function(err) {
    console.log('oops',err)
  })

  var allrecipes = data;

  recipe-app.insertMany(allrecipes)
  .then(function (recipe) {
    console.log(recipe.title)
  })
  .catch(function (err){
    console.log("oops not all recipes",err)
  });
 



