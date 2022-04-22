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
        catchTime: {
            type: Date,
            required: true,
            default: Date.now,
        }
    }
)

const Fish = model('Fish', fishSchema)

module.exports = Fish