import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Address {
        streetName: String
    }
    type User {
        address: Address
        firstName: String
        lastName: String
        age: Int
        phone: String
        email: String
        avatar: String
    }
    type Query {
        user(offset: Int, limit: Int) : [User]
    }
`;

export default typeDefs;