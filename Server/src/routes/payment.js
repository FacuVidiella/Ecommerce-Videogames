const { default: axios } = require('axios');
const {User} = require('../db');
require('dotenv').config();
const server = require('express').Router();


server.post('/', async(req, res) => {
    const userEmail  = req.body.data.email;
    const userId = req.body.data.id;
    
    try{
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        })
        
        const asignProductsBought = await user.update({
            productsBought: userId,
        }) 
        
        res.status(200).send('Successfuly assigned products to user')

    } catch(err){
        res.status(404).send(err)
    }
})

module.exports = server;