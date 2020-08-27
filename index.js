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
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

//Iteration 2
// const cake = {
//   // iteration 1
//   title: "apple pie",
//   level: "Easy Peasy",
//   ingredients: "apple",
//   cuisine: "cuisine",
//   dishType: "dessert",
//   duration: 15,
//   creator: "sarah & nina",
// };
// Recipe.create(cake)
//   .then((cake) => console.log("The recipe title is saved and its value is: ", cake.title))
//   .catch((error) => console.log("An error happened while saving a new user:", error));

//Iteration 3
Recipe.insertMany(data)
  .then((docs) => {
    for (let i = 0; i < docs.length; i++) {
      //boucle pour afficher chaque titre de chaque el dans l'array docs
      console.log("title :", docs[i].title);
    }
  })
  .catch((err) => console.log("An error happened while saving a new user:", err));
