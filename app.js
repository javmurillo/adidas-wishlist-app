const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinitions = require('./swaggerDefinition.json');
const wishlistRoutes = require('./api/routes/wishlist');

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Swagger config
var options = {
    swaggerDefinition: swaggerDefinitions,
    apis: ['./api/routes/wishlist.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// API Routes
app.use('/api/wishlist', wishlistRoutes);

// serve static assets
app.use(express.static(__dirname + '/dist'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('dist/index.html', {
        root : __dirname
    });
});

module.exports = app;