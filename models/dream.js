const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
	name: String,
	dream: String,
});

module.exports = mongoose.model("Dream", dreamSchema);
