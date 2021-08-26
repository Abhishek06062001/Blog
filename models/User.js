const mongoose = require('mongoose');
const encrypt = require("mongoose-encryption")

const UserSchema = new mongoose.Schema({
  email:String,
  password:String
});

UserSchema.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:["password"]})

const User = mongoose.model('User', UserSchema);

module.exports = User;
