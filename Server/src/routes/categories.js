const { default: axios } = require('axios');
const { Category } = require('../db');
require('dotenv').config();
const server = require('express').Router();


// Get categorias
server.get('/', async (req, res) => {
    try {
        const data = await Category.findAll()
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
    };
});

server.post('/addCategory', async (req, res) => {
    const { name } = req.body;
    // console.log(name);
    try {
        const findDuplicate = await Category.findAll({
            where: {
                name: name,
            },
        });
        if (findDuplicate.length !== 0) {
            res.send("Ya existe esa categoría");
        } else {
            await Category.create({
                name: name,
            });
            res.send("Categoría Creada").status(200);
        }
    } catch (error) {
        res.json(error);
    }
});

server.post('/updateCategory', async (req, res) => {
    try {
        let { newName, name } = req.body;
        console.log(newName);
        let category = await Category.findOne({
            where: {
                name: name,
            },
        });

        category.name = newName;
        await category.save();

        res.send("Categoría modificada");
    } catch (error) {
        res.json(error);
    }
});

server.post('/deleteCategory', async (req, res) => {
    const { name } = req.body;
    try {
        await Category.destroy({
            where: {
                name: name,
            },
        });
        res.send("Categoría eliminada");
    } catch (error) {
        res.json(error);
    }
});

module.exports = server;