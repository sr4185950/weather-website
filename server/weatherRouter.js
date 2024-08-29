const express = require('express');
const weatherController = require("./weatherController")
const weatherRouter = express.Router()

weatherRouter.get('/', weatherController.getWeatherByCity)

module.exports = weatherRouter