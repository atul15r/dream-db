const { gql } = require("apollo-server");

// The GraphQL schema
module.exports = gql`
	type Dream {
		id: ID!
		name: String!
		dream: String!
	}

	type Query {
		getDream: [Dream]
	}

	type Mutation {
		addDream(name: String!, dream: String!): Dream!
		deleteDream(id: ID!): Dream!
	}
`;
