import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
    name: String,
    categoryId :{type : mongoose.Schema.Types.ObjectId,ref:'Category'},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
  },{timestamps: true});

  mongoose.model('Cuisine',MenuSchema)