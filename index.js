const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// iteration 2
const data_iteration2 = {
  title: "Soupe aux lentilles",
  level:"Easy Peasy",
  cuisine: "La Terre",
  dishType: "soup",
  duration: 45
}

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
    // iteration 2
    // Recipe.create(data_iteration2)
    // .then(recipe => console.log('The recipt is saved and it is: ', recipe))
    // .catch(error => console.log('An error happened while saving a new recipe:', error)); 
    
    // iteration 3
    Recipe.create(data)
    .then(recipes => console.log(recipes.map(r => console.log(r.title))))
    .catch(error => console.log('An error happened while saving a new recipe:', error)); 
    
    // iteration 4 - NOT WORKING
    // const filter = {"title" : "Rigatoni alla Genovese"};
    // const update = {"duration" : 100};
    // const opts = { new: true };
    // Recipe.findOneAndUpdate(filter, update, opts, (err, doc) => {
    //   if (err) {
    //       console.log("Something wrong when updating data!");
    //   }
  
    //   console.log(doc);
    // })

    // iteration 5 NOT WORKING
    const filter = {"title" : "Carrot Cake"};
    Recipe.deleteOne(filter, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    })

  }).then(self => {
    // iteration 6 NOT SURE IF IT'S WORKING 
    console.log(`Disconnecting to the database: "${self.connection.name}"`);
    return self.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

