import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: String,
  email: String,
  hashedPassword: String,
});

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; //true or false
};

UserSchema.statics.findByName = function (name) {
  return this.findOne({ name });
};

UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

const User = mongoose.model('User', UserSchema);
export default User;
