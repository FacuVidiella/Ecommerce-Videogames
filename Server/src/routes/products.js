const { default: axios } = require('axios');
const { Product, Category, Opinion } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize')
const server = require('express').Router();

// Get general
server.get('/', async (req, res) => {
    try {
        if (!req.query.name) {
            const data = await Product.findAll({
                include: [
                    {
                        model: Category,
                        attributes: ['name']
                    },
                    {
                        model: Opinion,
                        attributes: ['content', 'revRating', 'name', "userEmail"]
                    }
                ]
            })
            res.status(200).json(data)
        }
        else {
            const gameBd = await Product.findAll({
                where: { name: { [Op.iLike]: '%' + req.query.name + '%' } }
            });
            let private = gameBd.map(p =>
                p.dataValues
            );
            res.status(200).json(private)
        }
    }
    catch (err) {
        console.log(err)
    }
});

// Product especifico
server.get('/:id', async (req, res) => {
    const paramsId = req.params.id;
    try {
        const data = await Product.findOne({
            where: {
                id: paramsId
            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Opinion,
                    attributes: ['content', 'revRating', 'name', "userEmail"]
                }
            ]
        });
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
    };
});

server.post('/addProduct', async (req, res) => {
    let {
        name,
        price,
        discount,
        stock,
        description,
        image,
        category,
    } = req.body;

    if (price < 0) return res.json({ error: 'El valor de precio no puede ser menor a cero' })
    if (stock < 0) return res.json({ error: 'El valor de stock no puede ser menor a cero' })

    try {
        const [addProduct, created] = await Product.findOrCreate({
            where: {
                name,
                price,
                discount,
                stock,
                description,
                image
            },
        });

        const findCategories = await Category.findAll({
            where: {
                name: {
                    [Op.in]: category,
                },
            },
        });

        await addProduct.setCategories(findCategories);

        return res.json(addProduct);
    } catch (err) {
        console.log(err);
    }
});

server.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, price, discount, stock, description, image } = req.body;

    Product.update({
        name,
        price,
        discount,
        stock,
        description,
        image
    }, {
        where: { id }
    })
        .then(data => {
            if (!data) {
                return res.status(400).send({ error: 'Producto no encontrado' });
            }


            return Product.findByPk(id, { include: [Category] });
        })
        .then(product => {
            return res.send(product);
        })
        .catch(next);
});

server.post('/:idProducto/category/:idCategoria', (req, res) => {
    const idProducto = req.params.idProducto;
    const idCategoria = req.params.idCategoria;

    var product;
    Product.findByPk(idProducto)
        .then((data) => {
            product = data;
            return Category.findByPk(idCategoria);
        })
        .then(async (category) => {
            await product.addCategories(category);

            Product.findByPk(idProducto, { include: [Category] }).then(data => {
                res.send({ ...data.dataValues });
            });
        })
        .catch(err => {
            res.send(err);
        });
});

server.delete('/:idProducto/category/:idCategoria', (req, res) => {
    const idProducto = req.params.idProducto;
    const idCategoria = req.params.idCategoria;

    var product;
    Product.findByPk(idProducto)
        .then((data) => {
            product = data;
            return Category.findByPk(idCategoria);
        })
        .then(async (category) => {
            await product.removeCategories(category);

            Product.findByPk(idProducto, { include: [Category] }).then(data => {
                res.send({ ...data.dataValues });
            });
        })
        .catch(err => {
            res.send(err);
        });
});

server.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Product.destroy({
        where: { id }
    })
        .then((data) => {
            if (data) return res.send({ productDeleted: Number(id) });
            return res.status(404).send({ error: "Producto no encontrado" });
        })
        .catch(next);
});
module.exports = server;