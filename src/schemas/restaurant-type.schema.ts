import * as mongoose from 'mongoose';

export const RestaurantTypeSchema = new mongoose.Schema({
    name: String,
  },{timestamps: true});

  mongoose.model('RestaurantType',RestaurantTypeSchema)