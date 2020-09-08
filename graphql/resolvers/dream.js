const { UserInputError } = require("apollo-server");
const Dream = require("../../models/dream");
const { validateDream } = require("../../util/validators");

module.exports = {
	Query: {
		async getDream() {
			try {
				const dream = await Dream.find();
				return dream;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async addDream(_, { name, dream }) {
			let len = "";
			const { valid, errors } = validateDream(name, dream);
			if (!valid) {
				throw new UserInputError("Errors", { errors });
			}

			const newDream = new Dream({
				name,
				dream,
			});

			const res = await newDream.save();
			return res;
		},

		async deleteDream(_, { id }) {
			if (id === "") {
				throw new UserInputError("require id");
			}

			const res = await Dream.findOneAndRemove({ _id: id });

			return res;
		},
	},
};
