module.exports.validateDream = (name, dream) => {
	const errors = {};

	if (name.trim() === "") {
		errors.lat = "name required";
	}

	if (dream.trim() === "") {
		errors.long = "type required";
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};
