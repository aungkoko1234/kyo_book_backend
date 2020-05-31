import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
    name: String,
    address : String,
    session : Number,//allowed time to eat
    url : String,
    capacity : Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    typeId : {type:mongoose.Schema.Types.ObjectId,ref:'RestaurantType'},
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
  },{timestamps: true});

  mongoose.model('Restaurant',RestaurantSchema)