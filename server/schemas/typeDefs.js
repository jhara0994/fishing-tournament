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
        fish: [Fish]
    }

    type Fish {
        _id: ID
        type: String
        weight: Int
        length: Int
        image: String
        catchTime: String
    }

    type Query {
        anglers: [Angler]
        fish: [Fish]
        fishes(_id: ID!): Fish
    }

    type Mutation {
        addAngler(firstName: String!, lastName: String!, email: String!, password: String!): Angler
        updateAngler(firstName: String, lastName: String, email: String, password: String): Angler
        addFish(type: String!, weight: Int!, length: Int!, image: String!): Fish
        login(email: String!, password: String!): Angler
    }
`;

module.exports = typeDefs