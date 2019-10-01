const express = require('express');
const Route = express.Router();
const courseController = require('../controllers/course')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', courseController.getCourse)
    .get('/category/:id_category', courseController.getByCategory)
    .get('/:id_course', courseController.courseDetail)
    .post('/', courseController.insertCourse)
    .patch('/:id_course', courseController.updateCourse)
    .delete('/:id_course', courseController.deleteCourse)
module.exports = Route;