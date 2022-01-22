const jwt = require('jsonwebtoken');


module.exports =function auth(req,res,nxt){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({'message':'Acess Denied'});

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        nxt();
    }
    catch(err){
        res.sendres.status(401).send({'message':'Invalid Token'});
    }
}