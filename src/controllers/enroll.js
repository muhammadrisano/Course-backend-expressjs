const enrollModels = require('../models/enroll')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getEnroll: (req, res) => {
        enrollModels.getEnroll()
            .then((resultenroll) => {
                const result = resultenroll
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    enrollDetail: (req, res) => {
        const id_enroll = req.params.id_enroll
        console.log(id_enroll)
        enrollModels.enrollDetail(id_enroll)
            .then((resultenroll) => {
                const result = resultenroll
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertEnroll: (req, res) => {
        const { id_user, id_course } = req.body
        const data = {
            id_user,
            id_course,
            status: 1,
            created_at: new Date()
        }
        enrollModels.insertEnroll(data)
            .then((resultenroll) => {
                const result = resultenroll
                MiscHelper.response(res, result, 201, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    deleteEnroll: (req, res) => {
        const id_enroll = req.params.id_enroll
        enrollModels.deleteEnroll(id_enroll)
            .then((resultenroll) => {
                const result = resultenroll
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

