const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userprofileschema = new Schema({
	name: {
		type: String,
		required: true
	},
	mailid: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
},{
	collection: 'UserProfile'
});

module.exports = mongoose.model('UserProfile', userprofileschema);