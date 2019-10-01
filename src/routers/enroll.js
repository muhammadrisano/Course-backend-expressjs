const express = require('express');
const Route = express.Router();
const enrollController = require('../controllers/enroll')
const Auth = require('../helpers/auth')
Route
    .all('/*', Auth.authInfo)
    .get('/', Auth.accesstoken, enrollController.getEnroll)
    .get('/:id_enroll', Auth.accesstoken, enrollController.enrollDetail)
    .post('/', Auth.accesstoken, enrollController.insertEnroll)
    .delete('/:id_enroll', Auth.accesstoken, enrollController.deleteEnroll)

module.exports = Route;