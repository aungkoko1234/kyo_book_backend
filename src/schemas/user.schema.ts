import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    name: String,
    dob: String,
    email: String,
    password : String,
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
    gender : {type:String,enum:['Male','Female','Others'],default:'Male'}
  },{timestamps: true});
  mongoose.model('User',UserSchema)