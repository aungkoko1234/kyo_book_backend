import { Category } from './category.interface';
import { Restaurant } from './restaurant.interface';
import {Document} from 'mongoose';
export interface Menu extends Document{
    name : string,
    categoryId : Category,
    price : number,
    createdBy : Restaurant
}