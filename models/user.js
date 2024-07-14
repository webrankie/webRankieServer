const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
