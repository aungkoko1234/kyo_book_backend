import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
    name: String,
  },{timestamps: true});

  mongoose.model('Role',RoleSchema)