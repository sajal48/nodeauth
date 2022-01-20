const router = require('express').Router();
const User = require('../model/User');
const {LoginValidation,RegisterValidation} = require('../validation');
const bcrypt = require('bcryptjs');




//validation




router.post('/register',async (req,res)=>{

    const {error} = RegisterValidation(req.body);
    if(error) {
        res.status(400).send({
            "message": error.message
        });
        return true;
    
    }

    const isEmailExist = await User.findOne({email: req.body.email});

    if(isEmailExist){
        res.status(400).send({
            "message":"Email already Exist"
        });
        return true;
    }
    
    const salt = await bcrypt.genSalt(10);
    const haspass = await bcrypt.hash(req.body.password,salt);
    
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:haspass,
        username:req.body.username,

    });

    try{
        const saveduser = await user.save();
        res.send({
            "user": user._id
        });
    }
    catch(err){
        res.status(400).send(err);
    }
    return true;

});

router.post('/login',async (req,res)=>{

    const {error} = LoginValidation(req.body);
    if(error) {
        res.status(400).send({
            "message": error.message
        });
        return true;
    }

    const user = await User.findOne({email: req.body.email});

    if(!user){
        res.status(400).send({
            "message":"Email not registered"
        });
        return true;
    }
    const validpass = await bcrypt.compare(req.body.password,user.password); 

    if(!validpass){
        res.status(400).send({
            "message":"Wrong password"
        });
        return true;
    }

    res.send({
        "user": user._id
    });
});

module.exports = router;