const express = require('express');
const Route = express.Router();
const categoryController = require('../controllers/category')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', categoryController.getCategory)
    .get('/:id_category', categoryController.categoryDetail)
    .post('/', categoryController.insertCategory)
    .delete('/:id_category', categoryController.deleteCategory)

module.exports = Route;