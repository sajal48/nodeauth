const joi = require('@hapi/joi');

const RegisterValidation = (data)=>{
const scema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).email(),
    password: joi.string().min(6).required(),
    username: joi.string().min(6).required(),
});
 return scema.validate(data)
}

const LoginValidation = (data)=>{
    const scema = joi.object({
        email: joi.string().min(6).email(),
        password: joi.string().min(6).required(),
    });
     return scema.validate(data)
}

module.exports.LoginValidation = LoginValidation;
module.exports.RegisterValidation = RegisterValidation;