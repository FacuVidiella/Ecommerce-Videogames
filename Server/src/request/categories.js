const server = require('express').Router();
const {
    Product,
    Category
} = require('../db');
const {
    API_KEY
} = process.env;
const axios = require('axios');

const apiCat = async () => {
    try {
        const api = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const apiData = await api.data.results.map(e => {
            return {
                name: e.name,
                games: e.games.map(e => e.id)
            };
        });

        // apiData.forEach(async e => {
        //     const catCreated = await Category.create({
        //         name: e.name
        //     })
        //     e.games.forEach (async o => {
        //         const producto = await Product.findOne({
        //             where: {
        //                 idApi: o
        //             }
        //         })
        //         if (producto !== null) {
        //             producto.addCategories(catCreated)
        //         }
        //     })
        // });

        for (let i = 0; i < apiData.length; i++) {
            const catCreated = await Category.create({
                name: apiData[i].name
            })
            for (let j = 0; j < apiData[i].games.length; j++) {
                const producto = await Product.findOne({
                    where: {
                        idApi: apiData[i].games[j]
                    }
                })
                if (producto !== null) {
                    producto.addCategories(catCreated)
                }
            }
        }

        return apiData;
    } catch (err) {
        return console.log(err)
    };
};


module.exports = {
    apiCat
};