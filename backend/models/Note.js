const mongoose = require('mongoose');
const { Schema } = mongoose;

// Documentation for writing schema: https://mongoosejs.com/docs/guide.html#definition    

const NoteSchema = new Schema({
 
   user : {                    // ye bna rhe taki ek user dusre user ka content na dekh paye
         type : mongoose.Schema.Types.ObjectId ,
         ref : 'user'         // ye hum user model ya User.js se laa rhe 
   } , 
     title: {
        type : String ,
        require : true 
     },
     description : {
        type : String ,
        require : true 
    },
     tag : {
        type : String,
       default : "General"
    },
     date : {
        type : Date ,
        default : Date.now
    }
  });

  module.exports = mongoose.model('notes' , NoteSchema) ; // iska mtlb kahi bhi hum 'note' word ka user krege Data k liye toh ye 'NoteSchema' wale ka user kr skega.