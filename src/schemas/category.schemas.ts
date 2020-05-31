import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
  },{timestamps: true});

  mongoose.model('Cuisine',CategorySchema)