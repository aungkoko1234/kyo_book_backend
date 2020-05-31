import { User } from './user.interface';
import { Document } from 'mongoose';
import { RestaurantType } from './restaurant-type.interface';
export interface Restaurant extends Document{
    name: string;
    address : string,
    session : number,
    capacity :number,
    url : string,
    createdBy : User,
    typeId : RestaurantType,
    location :any
  }