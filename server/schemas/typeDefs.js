const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Angler {
        _id: ID
        firstName: String
        lastName: String
        nickname: String
        DOB: Date
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
        catchTime: Date
    }
`