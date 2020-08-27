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
    Recipe.create(
      {
      title: "IronBurger",
      level: "Amateur Chef",
      ingredients: [
        "bread",
        "bacon",
        "cheese",
        "onion",
        "salt",
        "meat"
      ],
      cuisine: "fastfood",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 5,
      creator: "Ironhack"}
    ).then(function (recipe) {
      console.log('Ok');
    }).catch(function (err) {
      console.log('Not good');
    });
  
    Recipe.insertMany(data)
      .then(function (recipes) {
        recipes.forEach(function (recipe) {
          console.log(`Title: ${recipe.title}`);
        })
      }).catch(function (err) {
        console.log(err);
      });
  
      Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
      .then(function (recipe) { 
        console.log(`Rigatoni updated : ${recipe}`);
      }).catch(function (err) {
        console.log(err);
      });
  
      Recipe.deleteOne({title: 'Carrot Cake'})
      .then(function (recipe) { 
        console.log(`deleted : ${recipe}`);
      }).catch(function (err) {
        console.log(err);
      });
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  // Recipe.create(
  //   {
  //   title: "IronBurger",
  //   level: "Amateur Chef",
  //   ingredients: [
  //     "bread",
  //     "bacon",
  //     "cheese",
  //     "onion",
  //     "salt",
  //     "meat"
  //   ],
  //   cuisine: "fastfood",
  //   dishType: "main_course",
  //   image: "https://images.media-allrecipes.com/images/75131.jpg",
  //   duration: 5,
  //   creator: "Ironhack"}
  // ).then(function (recipe) {
  //   console.log('Ok');
  // }).catch(function (err) {
  //   console.log('Not good');
  // });

  // Recipe.insertMany(data)
  //   .then(function (recipes) {
  //     recipes.forEach(function (recipe) {
  //       console.log(`Title: ${recipe.title}`);
  //     })
  //   }).catch(function (err) {
  //     console.log(err);
  //   });

  //   Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
  //   .then(function (recipe) { 
  //     console.log(`Rigatoni updated : ${recipe}`);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });

  //   Recipe.deleteOne({title: 'Carrot Cake'})
  //   .then(function (recipe) { 
  //     console.log(`deleted : ${recipe}`);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });