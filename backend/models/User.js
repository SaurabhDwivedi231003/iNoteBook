const mongoose = require('mongoose');
const { Schema } = mongoose;


// Documentation for writing schema: https://mongoosejs.com/docs/guide.html#definition    

const UserSchema = new Schema({
     name: {
        type : String ,
        require : true 
     },
     email : {
        type : String,
        require : true
    },
     password : {
        type : String,
        require : true, 
        unique : true
    }, 
     date : {
        type : Date ,
        default : Date.now
    }

  });

  const User = mongoose.model('User' , UserSchema) ;
  module.exports = User
   // iska mtlb kahi bhi hum 'user' word ka user krege Data k liye toh ye 'UserSchema' wale ka user kr skega.