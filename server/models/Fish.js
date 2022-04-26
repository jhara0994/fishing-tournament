const { Schema, model } = require('mongoose')

const fishSchema = new Schema (
    {
        type: {
            type: String,
            required: true,
        },
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
            required: true,
        },
        catchTime: {
            type: Date,
            required: true,
            default: Date.now,
        }
    }
)

const Fish = model('Fish', fishSchema)

module.exports = Fish