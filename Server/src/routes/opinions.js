const { default: axios } = require('axios');
const { Opinion, Product, User } = require('../db');
require('dotenv').config();
const server = require('express').Router();

// Post opinion
server.post('/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    const { content, revRating, prodId, name } = req.body;
    try {
        const searchUser = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const searchProduct = await Product.findOne({
            where: {
                id: prodId
            }
        });
        if (searchUser && searchProduct){
            const generateOpinion = await Opinion.create({
                name,
                content,
                revRating,
            });
            console.log(generateOpinion)
            await searchUser.addOpinion(generateOpinion);
            await searchProduct.addOpinion(generateOpinion);
            await generateOpinion.setProduct(searchProduct);
            res.status(200).send('Succes');
        } else {
            res.status(400).send('Wrong email')
        }
    }
    catch (err) {
        console.log(err)
    };
});


module.exports = server;