const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: {
		type: Number,
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
    preferences:{
        type: Array,
        required: true
	},
	location:{
		type: String,
		required:false

	}
});

mongoose.model('User', userSchema);