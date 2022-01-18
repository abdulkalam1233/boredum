const {Router} = require('express');
const { JWT } = require('../config');
const { UserModal } = require('../database/models/user.model');
const { generateToken } = require('../helpers/jwt.helper');
const { matchPassword } = require('../helpers/password.helper');
const { validateEmail } = require('../utils/string.util');

const authRouter = Router();

authRouter.post('/auth/sign-up', 
async (req,res,next)=>{
    const {email, password, name, phone} = req.body;
    try{
        if(!email || !password || !name){
            return res.status(400).send({message: 'Validation failed. Email, password, name are required.'});
        }
        if(!validateEmail(email)){
            return res.status(400).send({message: 'Please enter a valid email.'});
        }
        const existingUser = UserModal.findOne({
            email,
        });
        if (existingUser) {
            return res.status(400).send({
                message: 'User Already Exist',
            })
        }
        const modelInstance = new UserModal({
            name: name,
            email: email,
            password: hashedPassword,
        });
        await modelInstance.save();
        return res.status(200).send({
            message: 'Registered',
        })
    } catch(error){
        // unlink('./' + file.path, console.log);
        return res.status(400).send({
            message: error.message || 'Failed to register user due to technical issues.',
        })
    }
})

authRouter.post('/auth/login', async (req,res,next)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send({message: 'Validation failed. Email, password are required.'});
        }

        const user = await UserModal.findOne({email});
        if (!user){
            return res.status(400).send({
                message: 'User not found.'
            })
        }
        const passwordMatch = await matchPassword(user.password, password);
        if (!passwordMatch){
            return res.status(400).send({
                message: 'Invalid password.'
            })
        }
        const token = await generateToken({
            payload: {
            id: user._id,
            email: user.email
        }, secret: JWT.secret, expiresIn: JWT.expires});

        res.status(200).send({
            message: 'Login successful',
            data: {
                token: token,
                user: user,
            }
        })
    } catch(error){
        res.status(400).send({
            message: error.message || 'Failed to login user due to technical issues.'
        })
    }
})

module.exports = {
    authRouter,
}