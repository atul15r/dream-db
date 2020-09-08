const dreamResolver = require("./dream");

module.exports = {
	Query: {
		...dreamResolver.Query,
	},
	Mutation: {
		...dreamResolver.Mutation,
	},
};
