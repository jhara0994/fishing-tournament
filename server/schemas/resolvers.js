const { AuthenticationError } = require('apollo-server-express');
const { Angler, Fish } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = { 
    Query: {
        fish: async () => {
            return await Fish.find()
        },
        anglers: async (parent, {_id}) => {
            if(_id){
                const angler = await Angler.findById(_id)
                return angler
            } else {
                throw new AuthenticationError('No ID Provided!')
            }
        },
    },
    Mutation: {
        addAngler: async(parent, args) => {
            const angler = await Angler.create(args)
            const token = signToken(angler)

            return { token, angler }
        },
        updateAngler: async(parent, args, context) => {
            if(context.angler) {
                return await Angler.findByIdAndUpdate(context.angler._id, args, { new: true })
            }
            throw new AuthenticationError('Not logged in!')
        },
        addFish: async(parent, args) => {
            try {
                const newFish = await Fish.create({ ...args })
                await Angler.findByIdAndUpdate(newFish)
                return newFish
            } catch (err) {
                console.log(`Error adding fish: ${err}`)
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
    }
}

module.exports = resolvers
