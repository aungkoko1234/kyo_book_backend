import * as mongoose from 'mongoose';

export const CuisineSchema = new mongoose.Schema({
    name: String,
  },{timestamps: true});

  mongoose.model('Cuisine',CuisineSchema)