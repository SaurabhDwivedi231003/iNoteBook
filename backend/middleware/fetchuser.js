var jwt = require('jsonwebtoken');   //for token generation

const JWT_SECRET = 'Saurabhisagood$oy';




const fetchuser = (req , res , next ) =>{
    //GET the user from the jwt token and add id to req object

    const token = req.header('auth-token'); // ye hum THUNDERCLIENT me reuqst marte wqt dalege dhyaan rkhna
    if(!token){
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token , JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
        
    }

}

module.exports = fetchuser;
