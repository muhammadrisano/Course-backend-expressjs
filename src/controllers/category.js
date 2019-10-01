const categoryModels = require('../models/category')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getCategory: (req, res) => {
        categoryModels.getCategory()
            .then((resultCategory) => {
                const result = resultCategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    categoryDetail: (req, res) => {
        const id_category = req.params.id_category
        console.log(id_category)
        categoryModels.categoryDetail(id_category)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertCategory: (req, res) => {
        const name_category = req.body.name_category
        const data = {
            name_category,
        }
        categoryModels.insertCategory(data)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    deleteCategory: (req, res) => {
        const id_category = req.params.id_category
        categoryModels.deleteCategory(id_category)
            .then((resultcategory) => {
                const result = resultcategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

