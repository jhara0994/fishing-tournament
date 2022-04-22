const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const anglerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true, 
            trim: true,
        },
        lastName: {
            type: String,
            required: true, 
            trim: true,
        },
        nickName: {
            type: String
        },
        DOB: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
            trim: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true
          },
        password: {
            type: String,
            required: true,
            minlength: 3
        },
        status: {
            type: String,
        },
        fish: {
            type: Schema.Types.ObjectId,
            ref: 'Fish',
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

anglerSchema
    .virtual('fishCount')
    .get(function () {
        return this.fish.length
})

anglerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
  
anglerSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Angler = model('Angler', anglerSchema)

module.exports = Angler