const { Schema, model } = require('mongoose')

const catAnglerSchema = {
    anglerSkill: {
        type: String, 
        required: true,
    }

}

const CatAngler = model('CatAngler', catAnglerSchema)

module.exports = CatAngler