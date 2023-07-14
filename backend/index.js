const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


const app = express()
const port = 5000 
 
 
// req.body ko dekhna h toh middleware lgana hoga .
app.use(express.json()); //middle ware

// Available routes , yha k router humne router folder k andr dal rkhe hain aur idhr sirf use kr rhe hain.

app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'));


app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})
    
 