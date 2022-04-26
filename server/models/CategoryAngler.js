const { Schema, model } = require('mongoose')

const catAnglerSchema = {
    type: {
        type: String, 
        required: true,
    }

}

const CatAngler = model('Angler', catAnglerSchema)

module.exports = CatAngler