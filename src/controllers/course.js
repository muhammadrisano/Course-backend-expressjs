const courseModels = require('../models/course')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getCourse: (req, res) => {
        const search = req.query.search
        console.log(search);
        courseModels.getCourse(search)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getByCategory: (req, res) => {
        const id_category = req.params.id_category
        courseModels.getByCategory(id_category)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    courseDetail: (req, res) => {
        const id_course = req.params.id_course
        console.log(id_course)
        courseModels.courseDetail(id_course)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertCourse: (req, res) => {
        const { name_course, description, id_category, image } = req.body
        const data = {
            name_course,
            description,
            id_category,
            image,
            created_at: new Date(),
            updated_at: new Date()
        }
        courseModels.insertCourse(data)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateCourse: (req, res) => {
        const id_course = req.params.id_course
        const { name_course, description, id_category, image } = req.body
        const data = {
            name_course,
            description,
            id_category,
            image,
            updated_at: new Date()
        }
        courseModels.updateCourse(id_course, data)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteCourse: (req, res) => {
        const id_course = req.params.id_course
        courseModels.deleteCourse(id_course)
            .then((resultcourse) => {
                const result = resultcourse
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

