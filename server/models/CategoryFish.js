const { Schema, model } = require('mongoose')

const catFishSchema = {
    type: {
        type: String, 
        required: true,
    }

}

const CatFish = model('Angler', catFishSchema)

module.exports = CatFish