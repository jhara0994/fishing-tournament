const { Schema, model } = require('mongoose')

const catFishSchema = {
    fishType: {
        type: String, 
        required: true,
    }

}

const CatFish = model('CatFish', catFishSchema)

module.exports = CatFish