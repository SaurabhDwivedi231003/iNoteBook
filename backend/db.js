const mongoose = require('mongoose');

//start mongoDB actual server (not in compass) hit enter after few mints u will get key there .

async function connectToMongo(){
  try {
       await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', {   //?directConnection=true
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
       console.log('Connected to MongoDB');
      }
 catch (error) { console.error('Error connecting to MongoDB:', error); }
}

module.exports = connectToMongo; 
