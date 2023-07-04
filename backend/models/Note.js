const mongoose = require('mongoose');

// Documentation for writing schema: https://mongoosejs.com/docs/guide.html#definition    

const NoteSchema = new Schema({
 
     title: {
        type : string ,
        require : true 
     },
     description : {
        type : string ,
        require : true 
    },
     tag : {
        type : string,
       default : "Genral"
    },
     date : {
        type : Date ,
        default : Date.now
    }

  });

  module.exports = mongoose.model('note' , NoteSchema) ; // iska mtlb kahi bhi hum 'note' word ka user krege Data k liye toh ye 'NoteSchema' wale ka user kr skega.