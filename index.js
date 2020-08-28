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
  .catch(error => {
    console.error('Error connecting to the database', error);
  });



//insertManyRecipe();
var json = require('./data.json')
Recipe.insertMany(json)
  .then(function(recipes) {
    recipes.forEach(el => console.log(el.title))
  })
  .catch(function(err) {
    console.log('ooops', err)
  });

  //createRecipe();

  //function createRecipe () {
    //return Recipe.create({
      //title: "Asian Glazed Chicken Thighs",
      //level: "Amateur Chef",
      //ingredients: [
        //"1/2 cup rice vinegar",
        //"5 tablespoons honey",
        //"1/3 cup soy sauce (such as Silver Swan®)",
        //"1/4 cup Asian (toasted) sesame oil",
        //"3 tablespoons Asian chili garlic sauce",
        //"3 tablespoons minced garlic",
        //"salt to taste",
        //"8 skinless, boneless chicken thighs"
      //],
     //cuisine: "Asian",
     //dishType: "main_course",
      //image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      //duration: 40 ,
    //creator: "Chef LePapu"
  //}).then(title => console.log('The title of this recipe is: ', title))
    //.catch(error => console.log('Ooops', error));
  
  



//Update recipe
Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"},{duration:100})
  .then(function() {
    console.log("recipe updated")
  })
  .catch(function(err) {
    console.log('ooops', err)
  })

// remove recipe 
Recipe.deleteOne({title: "Carrot Cake"})
.then(function() {
  console.log("recipe deleted")
})
.catch(function(err) {
  console.log('ooops', err)
})

//Close
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
