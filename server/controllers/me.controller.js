const {Router} = require('express');
const { saveProfileImagesLocally } = require('../middlewares/media.middleware');

const meRouter = Router();

meRouter.get('/me/profile-details',
 async (req, res, next) => {
    try {
    } catch(error){
        console.log('FAILED TO FETCH THE USER PROFILE', error);
        res.status(400).send({
            message: error.message || 'Failed to fetch profile details due to the technical issue.'
        })
    }
})

meRouter.put('/me/profile-details',
 async (req, res, next) => {
    try {
    } catch(error){
        console.log('FAILED TO FETCH THE USER PROFILE', error);
        res.status(400).send({
            message: error.message || 'Failed to update profile details due to the technical issue.'
        })
    }
})

meRouter.put('/me/profile-image',
 saveProfileImagesLocally(),
 async (req, res, next) => {
    try {
    } catch(error){
        console.log('FAILED TO UPDATE THE USER PROFILE IMAGE', error);
        res.status(400).send({
            message: error.message || 'Failed to update profile image due to the technical issue.'
        })
    }
})

module.exports = {
    meRouter,
}