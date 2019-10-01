require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getCourse: (search) => {
        if (search) {
            return new Promise((resolve, reject) => {
                connection.query("SELECT course.*,category.name_category FROM course INNER JOIN category ON course.id_category = category.id_category WHERE course.name_course LIKE ? ORDER BY id_course desc", `%${search}%`, (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                connection.query("SELECT course.*,category.name_category FROM course INNER JOIN category ON course.id_category = category.id_category ORDER BY id_course desc", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            })
        }

    },
    getByCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM course WHERE id_category =?", id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    courseDetail: (id_course) => {
        console.log(id_course)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM course WHERE id_course =?", id_course, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertCourse: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO course SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCourse: (id_course) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM course WHERE id_course = ?", id_course, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateCourse: (id_course, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE course SET ? WHERE id_course = ?", [data, id_course], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}