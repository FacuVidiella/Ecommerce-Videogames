
const { User } = require('../db');
require('dotenv').config();
const { Router } = require('express');
const router = Router();
const cors = require('cors');
const session = require('express-session');


// router.use(
//     cors({
//       origin: '*',
//       credentials: true,
//     })
//   );
const products = require('./products');
const categories = require('./categories');
const orders = require('./orders');
const users = require('./user');
const opinions = require('./opinions');
const wish = require('./wish');
const spAdmin = require('./superAdmin');
const adRoutes = require('./adminRoutes')
const payment = require('./payment');
const sendMail = require('./nodemailer')

router.use('/products', products);
router.use('/categories', categories);
router.use('/orders', orders);
router.use('/users', users);
router.use('/opinions', opinions);
router.use('/wishes', wish);
router.use('/spAdmin', spAdmin);
router.use('/adRoutes', adRoutes);
router.use('/payment', payment);
router.use('/sendMail', sendMail);

module.exports = router;