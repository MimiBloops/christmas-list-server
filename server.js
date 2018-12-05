const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
port = process.env.PORT || 3000;

var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// const mysql = require('mysql');
// // connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'christmas-list',
//     socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// });

// // connect to database
// mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/help', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var clientRoute = require('./api/routes/clientRoute.js'); //importing route
var buyerRoute = require('./api/routes/buyerRoute.js');
var giftRoute = require('./api/routes/giftRoute.js');
var accessoryRoute = require('./api/routes/accessoryRoute.js');

clientRoute(app); //register the route
buyerRoute(app);
giftRoute(app);
accessoryRoute(app);