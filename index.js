const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    //ITERATIONS GO THERE
    Recipe.insertMany(data)
    .then(() => {
    Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}, function() {
      console.log("update ok");
    })})
    .catch((error) => {
      console.error("Error", error);
    })
  })
  //ITERATIONS STOP THERE
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

// ITERATION 2
//
//   Recipe.create({
//       "title": "Asian Glazed Chicken Thighs",
//       "level": "Amateur Chef",
//       "ingredients": [
//         "1/2 cup rice vinegar",
//         "5 tablespoons honey",
//         "1/3 cup soy sauce (such as Silver Swan®)",
//         "1/4 cup Asian (toasted) sesame oil",
//         "3 tablespoons Asian chili garlic sauce",
//         "3 tablespoons minced garlic",
//         "salt to taste",
//         "8 skinless, boneless chicken thighs"
//       ],
//       "cuisine": "Asian",
//       "dishType": "main_course",
//       "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
//       "duration": 40,
//       "creator": "Chef LePapu"
//     })
//     .then(() => {
//       Recipe.find({})
//         .then(function (recipe) { // ATTENTION : renvoi un tableau (array)
//           console.log("Title: ", recipe[0].title);
//         })
//         .catch(function (error) {
//           console.log("no title found", error);
//         })
//     })
//     .catch(error => {
//       console.log('pas cool', error);
//     })
// })

// ITERATION 3
//   Recipe.insertMany(data)
//     .then(() => {
//       Recipe.find({})
//         .then((recipes) => {
//           recipes.forEach(el => {
//             console.log(el.title);
//           })
//         })
//         .catch((error) => {
//           console.error("Error .find()", error);
//         })
//     })
// })