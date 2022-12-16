const { Router, application } = require('express');
const express = require('express');
const toDoListRouter = express.Router();


// DB CONNECTION

const pool = require('../modules/pool.js');

module.exports = toDoListRouter;