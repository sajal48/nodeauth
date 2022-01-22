const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifytoken');

router.get('/',verify,(req,res)=>{
    res.send({
        "message": "posts are showing"
    });
});



module.exports = router;