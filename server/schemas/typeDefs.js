const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Angler {
        _id: ID
        firstName: String
        lastName: String
        nickname: String
        DOB: String
        username: String
        email: String
        password: String
        status: String
        fish: [ID]
    }

    type Fish {
        _id: ID
        type: String
        weight: Int
        length: Int
        image: String
        catchTime: String
    }

    type Auth {
        token: ID
        angler: Angler
    }
    

    type Query {
        anglers(_id: ID): [Angler]
        fish(_id: ID): [Fish]
        fishCaught(anglersId: ID): [Fish]
    }

    type Mutation {
        addAngler(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateAngler(firstName: String, lastName: String, email: String, password: String): Angler
        addFish(type: String!, weight: Int!, length: Int!, image: String!): Fish
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs