require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getEnroll: (page) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM enroll ", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    enrollDetail: (id_enroll) => {
        console.log(id_enroll)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM enroll WHERE id_enroll =?", id_enroll, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertEnroll: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO enroll SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })

    },
    updateEnroll: (id_enroll, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE enroll SET ? WHERE id_enroll = ?", [data, id_enroll], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}