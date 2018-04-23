const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: {
		type: int,
		required: true
	},
	firstName: {
		type: String,
		required: false
	},
	lastName: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: false
	},
	accessTokens: {
		type: Array,
		required: false
    },
    preferences:{
        type: Array,
        required: true
	},
	eatingAt:{
		type: String,
		required:false
	}
});

mongoose.model('user', userSchema);