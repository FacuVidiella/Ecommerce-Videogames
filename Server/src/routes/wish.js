const { default: axios } = require("axios");
const { Wish, User, Product } = require("../db");
require("dotenv").config();
const server = require("express").Router();

// Get wishes
server.get("/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  try {
    const data = await Wish.findOne({
      where: {
        email: userEmail,
      },
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

server.post("/:email", async (req, res) => {
  const email = req.params.email;
  console.log(email);
  const { name } = req.body;
  try {
    // Busqueda user
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    // Busqueda product
    const searchProduct = await Product.findOne({
      where: {
        name,
      },
    });
    if (!searchProduct || !user) {
      return res.status(400).send("Failed request");
    }
    // New Order
    const newWish = await Wish.create({
      name,
    });
    await newWish.setProduct(searchProduct);
    await newWish.setUser(user);
    res.status(200).send(newWish);
  } catch (err) {
    console.log(err);
  }
});

server.delete("/:name", async (req, res) => {
    const name = req.params.name
    decodeURI(name)
    console.log(name)

    try {
       await Wish.destroy({
        where: {
            name: name
        }
    }) 
    } catch (error) {
        console.log(error)
    }
    res.send("OK")

    
});

module.exports = server;
