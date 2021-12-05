const { default: axios } = require('axios');
const { Product, Category, Opinion, History, User } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize')
const server = require('express').Router();


// Post de producto
server.post('/pproduct/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail
    const { name, released, image, price, stock, description, categories, request, descriptionHistory } = req.body;
    try {
        const search = await Product.findOne({
            where: {
                name: name
            }
        });
        if (search) {
            return res.status(200).json({error: 'El juego ya existe'})
        };
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const created = await Product.create({
            name,
            released,
            image,  
            price, 
            stock,  
            description, 
        });
        categories.forEach(async e => {
            const categoria = await Category.findOne({
                where: {
                    name: e
                }
            });
            categoria.addProducts(created);
        });
        const newHistory = await History.create({
            request: request,
            productId: created.id,
            description: descriptionHistory
        });
        await newHistory.setUser(user);
        res.status(200).json(created)
    }
    catch (err) {
        console.error(err.message)
    };
});

// Remove Product
server.put('/rproduct/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    const { request, prod, descriptionHistory } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const find = await Product.findOne({
            where: {
                id: prod
            }
        });
        if (find) {
            if (request === 'REMOVE_PRODUCT') {
                if (find.isActive) {
                    await find.update({isActive: false});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        productId: prod,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
            if (request === 'ACTIVATE_PRODUCT') {
                if (!find.isActive) {
                    await find.update({isActive: true});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        productId: prod,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
        } else {
            res.status(400).send('Wrong request')
        }

    } catch (error) {
        console.error(error.message);
    }
});

// Remove Category
server.put('/rcategories/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    const { request, cat, descriptionHistory } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const find = await Category.findOne({
            where: {
                id: prod
            }
        });
        if (find) {
            if (request === 'REMOVE_CATEGORY') {
                if (find.isActive) {
                    await find.update({isActive: false});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        categoryId: cat,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
            if (request === 'ACTIVATE_CATEGORY') {
                if (!find.isActive) {
                    await find.update({isActive: true});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        categoryId: cat,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
        } else {
            res.status(400).send('Wrong request')
        }

    } catch (error) {
        console.error(error.message);
    }
});

// Create category
server.post('/pcategories/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    const { request, cat, descriptionHistory } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const findCreated = await Category.findOrCreate({
            where: {
                name: cat
            }
        })
        const newHistory = await History.create({
            request: request,
            categoryId: cat,
            description: descriptionHistory
        });
        await newHistory.setUser(user);
        res.status(200).json(findCreated);
    } catch (error) {
        console.error(error.message);
    }
});

// Remove opinion
server.put('/ropinion/:userEmail', async (req, res) => {
    console.log(req.body)
    const userEmail = req.params.userEmail;
    console.log(userEmail)
    const { request, idOpinion, descriptionHistory } = req.body;
    
    try {
        const user = await User.findOne({
            where: {
                email: userEmail
            }
        });
        const find = await Opinion.findOne({
            where: {
                id: idOpinion
            }
        });
        if (find) {
            if (request === 'REMOVE_OPINION') {
                if (find.isActive) {
                    await find.update({isActive: false});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        opinionId: idOpinion,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
            if (request === 'ACTIVATE_OPINION') {
                if (!find.isActive) {
                    await find.update({isActive: true});
                    await find.save();
                    const newHistory = await History.create({
                        request: request,
                        opinionId: idOpinion,
                        description: descriptionHistory
                    });
                    await newHistory.setUser(user);
                    res.status(200).json(find);
                } else {
                    res.sendStatus(400)
                }
            }
        } else {
            res.status(400).send('Wrong request')
        }
    } catch (error) {
        console.error(error.message);
    }
});


module.exports = server;