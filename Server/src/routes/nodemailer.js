require('dotenv').config();
const {
    default: axios
} = require('axios');
const server = require('express').Router();
const nodemailer = require('nodemailer');

const {
    EMAIL,
    EMAIL_PASSWORD
} = process.env

const hashFunction = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}


server.post('/', (req, res) => {

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    });

    let mailDetails = {
        from: EMAIL,
        to: req.query.email,
        subject: 'Thanks for your purchase!',
        html: `${req.body.games.map(e=>'<h1>'+e.name+'  KEY  :   '+hashFunction()+'</h1>')}`
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.sendStatus(200)
        }
    });
})

module.exports = server;