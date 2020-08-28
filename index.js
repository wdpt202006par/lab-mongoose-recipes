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

    // iteration 2
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
    .then(function(recipe) {
      //
      console.log(recipe.title)
    })
    .catch(function (err) {
      console.log('oops',err)
    })

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  //ITERATION 3
var dataRecipes = require("./data.json")

  Recipe.insertMany(dataRecipes)
  .then(function(recipes) {
    //boucle sur le tab de recipes
    for(let i = 0; i<recipes.length; i++){
      console.log(recipes[i].title)
    }
    
  })
  .catch(function (err) {
    console.log('oops',err)
  })

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // //ITERATION 4

  // Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  // .then(function (msg) {
  //   console.log('Duration of Rigatoni alla Genovese updated!',msg)
  // })
  // .catch(function (err) {
  //   console.log('oops', err)
  // })

  // //ITERATION 5

  // Recipe.deleteOne({title: "Carrot Cake"})
  // .then(function (msg) {
  //   console.log('The Carrot Cake recipe have been deleted!', msg)
  // })
  // .catch(function (err) {
  //   console.log('oops', err)
  // })
 