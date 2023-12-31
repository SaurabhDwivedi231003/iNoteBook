const connectToMongo = require('./db');
var cors = require('cors')
const express = require('express')
connectToMongo();
const path = require('path');

const app = express();
const port = 5000 ;  

// req.body ko dekhna h toh middleware lgana hoga .
app.use(cors());
app.use(express.json()); //middle ware

// Available routes , yha k router humne router folder k andr dal rkhe hain aur idhr sirf use kr rhe hain.

app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'));
   
//Production script

app.use(express.static("./build"));
app.get("*" , (req , res)=>{
    res.sendFile(path.resolve(__dirname , "" ,"build" , "index.html"))
})
  
app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
});
 
  