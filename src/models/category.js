require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getCategory: (page) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category ", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    categoryDetail: (id_category) => {
        console.log(id_category)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category WHERE id_category =?", id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category WHERE id_category = ?", id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}