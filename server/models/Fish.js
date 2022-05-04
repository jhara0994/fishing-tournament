const { Schema, model } = require('mongoose')

const fishSchema = new Schema (
    {
        weight: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            
        },
        catchTime: {
            type: Date,
            required: true,
            default: Date.now,
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'CatFish',
            required: true,
        },
    }
)

const Fish = model('Fish', fishSchema)

module.exports = Fish